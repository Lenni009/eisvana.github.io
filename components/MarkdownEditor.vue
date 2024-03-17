<script setup lang="ts">
import { ref, computed } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useData } from 'vitepress';
import SubmitButton from './SubmitButton.vue';
import { buildImageFormData, buildTextFileFormData } from '../logic/createFormData';
import { compressFile } from '../logic/compressImage';
import { maxSize } from '../variables/fileCompression';

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
  const filename = 'wikiseite.md';
  const file = new File([pageContent.value], filename, { type: 'text/plain' });
  const objectUrl = URL.createObjectURL(file);
  element.href = objectUrl;
  element.download = filename;
  element.click();
  URL.revokeObjectURL(objectUrl);
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
  const fileArray = Array.from(files);

  const anyTooLarge = fileArray.some((file) => file.size > maxSize);
  if (!anyTooLarge) return;

  // --------------------------------------------
  // This is commented out due to a bug in Firefox that could prevent the files from being processed: https://bugzilla.mozilla.org/show_bug.cgi?id=1885198
  // --------------------------------------------
  // I thought I could be smart and just put .map(compressFile) here.
  // But that function takes 2 parameters, and the map() function gives not only the current value, but also the current index and the whole array.
  // So when I did it that way, it would start at index 0, and therefore the quality would be 0.
  // -> use a proper function expression and don't rely on some crazy function execution syntax stuff
  // --------------------------------------------
  // const compressedFiles = Array.from(files).map((file) => compressFile(file));
  // --------------------------------------------

  isCompressing.value = true;

  const compressedFiles: File[] = [];

  // until that bug is fixed, we are using a regular for loop
  for (const file of fileArray) {
    const compressedFile = await compressFile(file);
    compressedFiles.push(compressedFile);
  }

  images.value = compressedFiles;
  // images.value = await Promise.all(compressedFiles);

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
    class="pico"
    ref="form"
    @submit.prevent
  >
    <label
      class="drop-container"
      for="image-upload"
    >
      <span class="drop-title">Add Images</span>
      <input
        accept="image/*"
        id="image-upload"
        type="file"
        multiple
        @change="onFileChange"
      />
    </label>

    <SubmitButton
      :class="{ 'is-compressing': isCompressing }"
      :form-data-array="formData"
      :is-busy="isCompressing"
      :is-incomplete="isIncomplete"
      :text
      :webhook
      @success="clearInputs"
    />
  </form>
</template>

<style scoped lang="scss">
.editor {
  margin-block: 1rem;
}

.drop-container {
  --border-radius: 10px;
  align-items: center;
  border: 2px dashed;
  border-radius: var(--pico-border-radius);
  cursor: pointer;
  margin-block-end: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 150px;
  justify-content: center;
  transition:
    background-color 0.2s ease-in-out,
    border 0.2s ease-in-out;

  &.drag-active,
  &:hover {
    border: 3px solid;
  }

  .drop-title {
    font-weight: 700;
    text-align: center;
  }

  input[type='file'] {
    border: 1px solid;
    border-radius: var(--pico-border-radius);
    height: auto;
    padding: 5px;
    width: max-content;

    &::file-selector-button {
      padding: 10px 20px;
    }
  }
}
</style>
