<script setup lang="ts">
defineProps<{
  file: File;
  index: number;
  url: string;
  isUsed: boolean;
}>();

defineEmits<(e: 'remove', value: File) => void>();
</script>

<template>
  <div class="gallery-item">
    <div class="image-wrapper">
      <img
        :alt="file.name"
        :src="url"
        class="image"
        @click="$emit('remove', file)"
      />
    </div>
    <p
      :class="{ 'is-unused': !isUsed }"
      :title="isUsed ? undefined : 'Unused'"
      class="file-name"
    >
      {{ file.name }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.gallery-item {
  max-width: 150px;

  .image-wrapper {
    position: relative;
    cursor: pointer;

    &::before {
      opacity: 0;
      content: '✖';
      position: absolute;
      font-size: 2rem;
      top: 0.5rem;
      transition: opacity var(--pico-transition);
      pointer-events: none;
      color: red;
    }

    &:hover::before {
      opacity: 1;
    }
  }
  .file-name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;

    &.is-unused {
      color: red;
    }
  }
}
</style>
