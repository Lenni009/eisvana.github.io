<script setup lang="ts">
import { computed, ref } from 'vue';
import { multiRequest } from '../logic/webRequests';

const props = defineProps<{
  webhook: string;
  formDataArray: FormData[];
  isIncomplete: boolean;
  isBusy?: boolean;
  text?: string;
}>();

const emit = defineEmits(['success', 'fail']);

const isSending = ref(false);
const isFailed = ref(false);
const isSent = ref(false);
const isIncomplete = ref(false);

async function submit() {
  try {
    if (props.isIncomplete) {
      isIncomplete.value = true;
      throw new Error();
    }
    isSending.value = true;
    await multiRequest(props.webhook, props.formDataArray);
    isSent.value = true;
    emit('success');
  } catch (error) {
    console.warn('caught error:', error);
    emit('fail');
    isFailed.value = true;
  }
  isSending.value = false;
  const delay = 1500;
  setTimeout(() => {
    isSent.value = false;
    isFailed.value = false;
    isIncomplete.value = false;
  }, delay);
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
  <button
    :aria-busy="isSending || isBusy"
    :class="{ sending: isSending, 'is-error': isFailed, 'is-success': isSent }"
    @click="submit"
  >
    {{ buttonText }}
  </button>
</template>
