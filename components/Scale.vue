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
    <div
      v-for="n in 5"
      class="scale-item"
    >
      <label :for="`${name}-${n}`">{{ n }}</label>
      <input
        v-model="model"
        :id="`${name}-${n}`"
        :name
        :value="n"
        type="radio"
        @click="onDeselect"
      />
    </div>
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

    input {
      margin: 0;
    }
  }
}
</style>
