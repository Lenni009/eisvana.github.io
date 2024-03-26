<script setup lang="ts">
import { MdEditor } from 'md-editor-v3';
import { useTheme } from '../composables/useTheme';

const { theme } = useTheme();

interface Props {
  class?: string;
  editorId?: string;
  placeholder?: string;
  noUploadImg?: boolean;
}

defineProps<Props>();

const model = defineModel({ type: String });

const emit = defineEmits<{
  onSave: [value: string, html: Promise<string>];
  onUploadImg: [files: File[], callback: (urls: string[] | { url: string; alt: string; title: string }[]) => void];
}>();
</script>

<template>
  <ClientOnly>
    <MdEditor
      v-model="model"
      :class
      :editor-id
      :no-upload-img
      :placeholder
      :theme
      class="md-editor"
      language="en-US"
      preview-theme="github"
      no-highlight
      no-katex
      no-mermaid
    />
  </ClientOnly>
</template>

<style scoped lang="scss">
.md-editor {
  margin-block-end: 1rem;
}
</style>
