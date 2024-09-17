<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import MarkdownEditor from './MarkdownEditor.vue';
import 'md-editor-v3/lib/style.css';
import SubmitButton from './SubmitButton.vue';
import { buildImageFormData, buildTextFileFormData } from '../logic/createFormData';
import { compressFile } from '../logic/compressImage';
import PicoStyle from './PicoStyle.vue';
import GalleryElement from './GalleryElement.vue';
import { escapeFileName } from '../logic/fileNameEscape';
import { maxLength } from '../variables/formValidation';
import { maxFilesPerMessage, maxMessageSize } from '../variables/fileCompression';

const pageContent = ref('# Hello World\n\nThis is content');
const images = ref<File[]>([]);
const category = ref('');
const isCompressing = ref(false);
const isIncomplete = computed(() => !pageContent.value || !category.value);
const fileNames = computed(() => images.value.map((file) => file.name));
const usedImages = computed(() => images.value.filter((file) => pageContent.value.includes(file.name)));
const paginatedImages = computed(() => paginate(usedImages.value));
const imageObjectUrls = ref<string[]>([]);
const webhook = atob(import.meta.env.VITE_DISCORD_BLOG_WEBHOOK ?? '');

const form = ref<HTMLFormElement | null>(null);

watch(images, (newVal, oldVal) => {
  const newImages = newVal.filter((file) => !oldVal.includes(file));
  const removedImages = oldVal.filter((file) => !newVal.includes(file));
  const removedIndices = removedImages.map((file) => oldVal.indexOf(file));
  removedIndices.forEach((index) => URL.revokeObjectURL(imageObjectUrls.value[index]));

  const newObjectUrls = newImages.map((file) => URL.createObjectURL(file));
  imageObjectUrls.value = imageObjectUrls.value.filter((_url, idx) => !removedIndices.includes(idx));
  imageObjectUrls.value.push(...newObjectUrls);
});

function downloadFile() {
  const element = document.createElement('a');
  const filename = 'blog.md';
  const file = new File([pageContent.value], filename, { type: 'text/plain' });
  const objectUrl = URL.createObjectURL(file);
  element.href = objectUrl;
  element.download = filename;
  element.click();
  URL.revokeObjectURL(objectUrl);
}

const imageFormData = computed<FormData[]>(() => paginatedImages.value.map(buildImageFormData));
const textFormData = computed<FormData>(() => buildTextFileFormData(pageContent.value, category.value));
const formData = computed<FormData[]>(() => [textFormData.value, ...imageFormData.value]);

function paginate(arr: File[]) {
  // sort by filesize; descending (largest first, smallest last)
  const sortedFiles = arr.toSorted((a, b) => b.size - a.size);

  const chunks: File[][] = [];
  let currentChunk: File[] = [];
  let currentSize = 0;

  for (const file of sortedFiles) {
    if (currentChunk.length < maxFilesPerMessage && currentSize + file.size < maxMessageSize) {
      // add the file to the current chunk
      currentChunk.push(file);
      currentSize += file.size;
    } else {
      // start a new chunk
      chunks.push(currentChunk);
      currentChunk = [file];
      currentSize = file.size;
    }
  }

  // add the last chunk if it's not empty
  if (currentChunk.length) chunks.push(currentChunk);

  return chunks;
}

const renameFile = (file: File, name: string) => new File([file], name, { type: file.type });

async function uploadImg(files: File[]) {
  // store all currently known filenames so we can write to them temporarily without affecting the global data
  const localFileNameCount: Record<string, number> = {};
  fileNames.value.forEach((name) => {
    localFileNameCount[name] ??= 0;
    localFileNameCount[name]++;
  });

  function makeFileNameUnique(file: File, count: number = 0): File {
    const fileNameParts = file.name.split('.');
    const fileExtension = fileNameParts.at(-1);
    const fileNameWithoutExtension = fileNameParts.slice(0, -1).join('_');
    const potentialNewName = `${fileNameWithoutExtension}_${count}.${fileExtension}`;

    const name = count ? potentialNewName : file.name;

    const localCount = (localFileNameCount[name] ??= 0);
    localFileNameCount[name]++;
    if (!localCount) return renameFile(file, name);

    return makeFileNameUnique(file, localCount);
  }

  // avoid duplicate filenames and remove breaking characters
  const fileNamesFixed = files
    .map((file) => renameFile(file, escapeFileName(file.name)))
    .map((file) => makeFileNameUnique(file)); // this must stay a function call like this, because `makeFileNameUnique` takes two values. See below for more explanation (this happened twice now)

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
  for (const file of fileNamesFixed) {
    const compressedFile = await compressFile(file);
    compressedFiles.push(compressedFile);
  }

  // images.value = await Promise.all(compressedFiles);

  isCompressing.value = false;
  images.value = [...images.value, ...compressedFiles];
}

const clearInputs = () => {
  pageContent.value = '';
  images.value = [];
  form.value?.reset();
};

function removeImage(file: File) {
  images.value = images.value.filter((storedFile) => file !== storedFile);
}

const text = computed(() => (isCompressing.value ? 'Compressing files...' : undefined));

const insertImage = (file: File) =>
  (pageContent.value = `${pageContent.value}\n![image](/images/blogs/${escapeFileName(category.value)}/${file.name})\n`);
</script>

<template>
  <form
    ref="form"
    @submit.prevent
  >
    <PicoStyle>
      <label for="category">Category or username under which the post will be listed:</label>
      <input
        v-model="category"
        :maxlength="maxLength"
        id="category"
        type="text"
      />
    </PicoStyle>

    <div v-show="category">
      <MarkdownEditor
        v-model="pageContent"
        editor-id="pageContent"
        @on-save="downloadFile"
        @on-upload-img="uploadImg"
      />

      <div v-if="images.length">
        <p>Uploaded images:</p>
        <div class="gallery">
          <GalleryElement
            v-for="(file, index) in images"
            :file
            :index
            :is-used="usedImages.includes(file)"
            :key="imageObjectUrls[index]"
            :url="imageObjectUrls[index]"
            @remove="removeImage(file)"
            @insert="insertImage(file)"
          />
        </div>
      </div>

      <SubmitButton
        :form-data-array="formData"
        :is-busy="isCompressing"
        :is-incomplete="isIncomplete"
        :text
        :webhook
        @success="clearInputs"
      />
    </div>
  </form>
</template>

<style scoped lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-block-end: 1rem;
}
</style>
