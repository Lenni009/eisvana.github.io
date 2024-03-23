<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  items: Record<string, string>;
  name: string;
  other?: boolean;
}>();

const model = defineModel({ type: String });
const otherValue = ref();

function deselect(e: Event) {
  const { target } = e;
  if (!(target instanceof HTMLInputElement)) return;
  if (model.value === target.value) {
    model.value = undefined; // NoSonar deselect everything if the currently selected item is clicked
  }
}

const checkOther = () => (model.value = otherValue.value);
</script>

<template>
  <div class="radio-select">
    <div v-for="(item, id) in items">
      <input
        v-model="model"
        :id="`${name}-${id}`"
        :name
        :value="item"
        type="radio"
        @click="deselect"
      />
      <label :for="`${name}-${id}`">{{ item }}</label>
    </div>
    <div
      v-if="other"
      class="radio-select-item-other"
    >
      <div>
        <input
          v-model="model"
          :id="`${name}-other`"
          :name
          :value="otherValue"
          type="radio"
        />
        <label
          :for="`${name}-other-input`"
          @click="checkOther"
          >Other:</label
        >
      </div>
      <input
        v-model="otherValue"
        :id="`${name}-other-input`"
        class="input-other"
        type="text"
        @input="checkOther"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.radio-select {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .radio-select-item-other {
    display: flex;
    gap: 0.5rem;
    align-items: baseline;

    .input-other {
      width: auto;
    }
  }
}
</style>
