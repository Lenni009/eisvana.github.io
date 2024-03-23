<script setup lang="ts">
import { computed, ref } from 'vue';
import { multiRequest } from '../logic/webRequests';
import PicoStyle from './PicoStyle.vue';

const props = defineProps<{
  webhook: string;
  formDataArray: FormData[];
  isIncomplete?: boolean;
  isBusy?: boolean;
  text?: string;
}>();

const isDev = import.meta.env.DEV;
const sendRequest = ref(false);

const emit = defineEmits(['success', 'fail']);

const isSending = ref(false);
const isFailed = ref(false);
const isSent = ref(false);
const isIncomplete = ref(false);

async function submit() {
  if (isDev && !sendRequest.value) {
    console.log(props.formDataArray);
    return;
  }
  try {
    if (props.isIncomplete) {
      isIncomplete.value = true;
      throw new Error('incomplete');
    }
    isSending.value = true;
    await multiRequest(props.webhook, props.formDataArray);
    isSent.value = true;
    emit('success');
  } catch (error) {
    console.warn('caught error:', error);
    emit('fail');
    isFailed.value = true;
  } finally {
    isSending.value = false;
    const delay = 1500;
    setTimeout(() => {
      isSent.value = false;
      isFailed.value = false;
      isIncomplete.value = false;
    }, delay);
  }
}

const buttonText = computed(() => {
  if (props.text) return props.text;
  if (isIncomplete.value) return 'Please fill out all fields';
  if (isSending.value) return 'Sending...';
  if (isFailed.value) return 'Failed!';
  if (isSent.value) return 'Sent!';
  return 'Submit';
});
</script>

<template>
  <PicoStyle>
    <button
      :aria-busy="isSending || isBusy"
      :class="{ 'is-error': isFailed, 'is-success': isSent }"
      :disabled="isSending || isBusy"
      @click="submit"
    >
      {{ buttonText }}
    </button>
    <label v-if="isDev">
      <input
        v-model="sendRequest"
        role="switch"
        type="checkbox"
      />
      <span>Send request</span>
    </label>
  </PicoStyle>
</template>

<style scoped lang="scss">
.is-error,
.is-success {
  pointer-events: none;
}

.is-error {
  background-color: var(--vp-c-red-3);
  border-color: var(--vp-c-red-2);
}

.is-success {
  background-color: var(--vp-c-green-3);
  border-color: var(--vp-c-green-2);
}
</style>
