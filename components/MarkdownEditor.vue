<script setup lang="ts">
import { ref, computed } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useData } from 'vitepress';
import SubmitButton from './SubmitButton.vue';
import { buildImageFormData, buildTextFileFormData } from '../logic/createFormData';
import { compressFile } from '../logic/compressImage';

const pageContent = ref('# Hello World\n\nThis is content');
const images = ref<File[]>([]);
const isCompressing = ref(false);
const isIncomplete = computed(() => !pageContent.value);
const paginatedImages = computed(() => paginate(images.value));
const webhook = atob(import.meta.env.VITE_DISCORD_BLOG_WEBHOOK);

const form = ref<HTMLFormElement | null>(null);

const { isDark } = useData();

const theme = computed(() => (isDark.value ? 'dark' : 'light'));

function downloadFile() {
  const element = document.createElement('a');
  element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(pageContent.value);
  element.download = 'Wikiseite.md';
  element.click();
}

const imageFormData = computed<FormData[]>(() => paginatedImages.value.map((message) => buildImageFormData(message)));
const textFormData = computed<FormData>(() => buildTextFileFormData(pageContent.value));
const formData = computed<FormData[]>(() => [textFormData.value, ...imageFormData.value]);

function paginate(arr: File[]) {
  const size = 10; // maximum amount of files in one Discord message
  return arr.reduce((acc: File[][], val, i) => {
    const idx = Math.floor(i / size);
    const page = (acc[idx] ??= []);
    page.push(val);

    return acc;
  }, []);
}

async function onFileChange(e: Event) {
  if (!(e.target instanceof HTMLInputElement)) return;
  const files = e.target.files;
  if (!files?.length) return;

  const compressedFiles = Array.from(files).map(compressFile);

  isCompressing.value = true;
  images.value = await Promise.all(compressedFiles);
  isCompressing.value = false;
}

const clearInputs = () => {
  pageContent.value = '';
  form.value?.reset();
};

const text = computed(() => (isCompressing.value ? 'Compressing files...' : undefined));
</script>

<template>
  <MdEditor
    v-model="pageContent"
    :noUploadImg="true"
    :theme="theme"
    class="editor"
    language="en-US"
    previewTheme="vuepress"
    @onSave="downloadFile"
  />

  <form
    class="eisvana-form"
    ref="form"
    @submit.prevent
  >
    <input
      accept="image/*"
      type="file"
      multiple
      @change="onFileChange"
    />

    <div class="fieldset">
      <SubmitButton
      :class="{'is-compressing': isCompressing}"
        :form-data-array="formData"
        :is-incomplete="isIncomplete"
        :text
        :webhook
        @success="clearInputs"
      />
    </div>
  </form>
</template>

<style scoped>
.editor {
  margin-block-start: 1rem;
}

.is-compressing {
  color: red;
  background-color: blue;
  pointer-events: none;
}
</style>
