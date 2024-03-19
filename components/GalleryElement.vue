<script setup lang="ts">
import PicoStyle from './PicoStyle.vue';

defineProps<{
  file: File;
  index: number;
  url: string;
  isUsed: boolean;
}>();

defineEmits<{
  (e: 'remove'): void;
  (e: 'insert'): void;
}>();
</script>

<template>
  <div class="gallery-item">
    <a
      :href="url"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        :alt="file.name"
        :src="url"
      />
    </a>
    <p
      :class="{ 'is-unused': !isUsed }"
      :title="isUsed ? undefined : 'Unused'"
      class="file-name"
    >
      {{ file.name }}
    </p>
    <PicoStyle>
      <div class="button-grid">
        <button
          class="primary"
          title="Insert"
          type="button"
          @click="$emit('insert')"
        >
          ➕
        </button>
        <button
          class="secondary"
          title="Remove"
          type="button"
          @click="$emit('remove')"
        >
          ✖
        </button>
      </div>
    </PicoStyle>
  </div>
</template>

<style scoped lang="scss">
.gallery-item {
  max-width: 150px;

  .button-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.25rem;
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
