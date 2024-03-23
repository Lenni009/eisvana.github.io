<script setup lang="ts">
import { deselect } from '../logic/formHelpers';

defineProps<{
  name: string;
  low: string;
  high: string;
}>();

const model = defineModel({ type: Number });

const onDeselect = (e: Event) => deselect(e, model);
</script>

<template>
  <div class="scale-wrapper">
    <div>{{ low }}</div>
    <label
      v-for="n in 5"
      :for="`${name}-${n}`"
      class="scale-item"
    >
      <span>{{ n }}</span>
      <input
        v-model="model"
        :id="`${name}-${n}`"
        :name
        :value="n"
        type="radio"
        @click="onDeselect"
      />
    </label>
    <div>{{ high }}</div>
  </div>
</template>

<style scoped lang="scss">
.scale-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
  justify-content: space-between;

  .scale-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    input {
      margin: 0;
    }
  }
}

@container (width <= 420px) {
  .scale-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .scale-item {
      flex-direction: row-reverse;
      gap: 1rem;
    }
  }
}
</style>
