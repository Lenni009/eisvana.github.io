<script setup lang="ts">
import { ref } from 'vue';
import { deselect } from '../logic/formHelpers';

defineProps<{
  items: Record<string, string>;
  name: string;
  other?: boolean;
}>();

const otherInput = ref<HTMLInputElement | null>(null);

const model = defineModel({ type: String });
const otherValue = ref('');

const onDeselect = (e: Event) => deselect(e, model);

const checkOther = () => (model.value = otherValue.value);

// this only triggers when the radio button is selected, not when it's deselected
const focusInput = () => otherInput.value?.focus();
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
        @click="onDeselect"
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
          @click="onDeselect"
          @change="focusInput"
        />
        <label :for="`${name}-other`">Other:</label>
      </div>
      <input
        v-model="otherValue"
        :id="`${name}-other-input`"
        class="input-other"
        ref="otherInput"
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
      flex-grow: 1;
    }
  }
}
</style>
