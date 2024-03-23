<script setup lang="ts">
import { maxLength, counterShowLimit } from '../variables/formValidation';
import { computed } from 'vue';

defineProps<{
  textareaId?: string;
}>();

const model = defineModel({ type: String });

const counter = computed(() => maxLength - (model.value?.length ?? 0));
const isCounterShown = computed(() => counter.value <= counterShowLimit);
</script>

<template>
  <textarea
    v-model="model"
    :class="{ 'display-warning': isCounterShown }"
    :id="textareaId"
    :maxlength="maxLength"
  ></textarea>
  <div
    v-show="isCounterShown"
    class="counter"
  >
    {{ counter }} characters left
  </div>
</template>

<style scoped lang="scss">
.display-warning {
  margin: 0;
}

.counter {
  font-size: smaller;
  margin-block-end: 1rem;
}
</style>
