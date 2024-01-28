<script setup lang="ts">
import { ref, computed } from 'vue';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

const contact = ref('');
const requestType = ref('');
const requestText = ref('');

const isSending = ref(false);
const isFailed = ref(false);
const isSent = ref(false);
const isIncomplete = ref(false);

async function submit() {
  const formData = buildFormData();
  await sendForm(formData);
}

async function sendForm(formData: FormData) {
  try {
    if (!contact.value || !requestText.value || !requestType.value) {
      isIncomplete.value = true;
      throw new Error();
    }
    isSending.value = true;
    await fetch(webhook, {
      method: 'POST',
      body: formData,
    });
    isSent.value = true;
    contact.value = '';
    requestText.value = '';
    requestType.value = '';
  } catch (error) {
    console.warn(error);
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

function buildFormData() {
  // initialising form data object
  const formData = new FormData();

  // filling form data object
  formData.append(
    'payload_json',
    JSON.stringify({
      embeds: [
        {
          title: requestType.value,
          fields: [
            {
              name: 'Message',
              value: requestText.value,
            },
            {
              name: 'Contact',
              value: contact.value,
            },
          ],
        },
      ],
    })
  );

  return formData;
}

const buttonText = computed(() => {
  if (isIncomplete.value) return 'Please fill out all fields';
  if (isSending.value) return 'Sending...';
  if (isFailed.value) return 'Failed!';
  if (isSent.value) return 'Sent!';
  return 'Submit';
});
</script>

<template>
  <form
    @submit.prevent
    class="contact-form"
  >
    <div class="fieldset">
      <label>Request Type:</label>
      <select
        v-model="requestType"
        class="select"
      >
        <option value="Message for the Bridge">General Message to the Bridge</option>
        <option value="Colony Suggestion">Colony Suggestion</option>
        <option value="Wiki Scholars Application">Wiki Scholars Application</option>
        <option value="Builder Collective Application">Builder Collective Application</option>
        <option value="Mentor Application">Mentor Application</option>
        <option value="Manager Application">Manager Application</option>
      </select>
    </div>
    <div class="fieldset">
      <label for="contactName">Your Name:</label>
      <input
        v-model="contact"
        class="input"
        id="contactName"
        type="text"
      />
    </div>
    <div class="fieldset">
      <label for="requestText">Your Request:</label>
      <textarea
        v-model="requestText"
        class="textarea"
        id="requestText"
      ></textarea>
    </div>
    <button
      @click="submit"
      :class="{ sending: isSending, 'is-error': isFailed, 'is-success': isSent }"
    >
      {{ buttonText }}
    </button>
  </form>
</template>

<style scoped lang="scss">
.contact-form {
  --border-radius: 5px;
  --outline-color: rgb(135, 211, 236);
  display: flex;
  flex-direction: column;
  border-color: var(--vp-c-text-1);
  width: 100%;

  & * {
    font-family: inherit;
    font-size: inherit;
  }

  & > * {
    flex-grow: 1;
  }

  label {
    margin-block-end: 3px;
  }

  input,
  textarea,
  select {
    border: 1px solid;
    border-radius: var(--border-radius);
    padding: 0.25rem;
    padding-inline: 0.5rem;

    &:hover {
      outline: 1px solid var(--outline-color);
    }
  }

  input,
  textarea {
    &:focus,
    &:focus-visible {
      outline: 2px solid var(--outline-color);
    }
  }

  button {
    padding: 1rem;
    border: 1px solid;
    border-color: var(--vp-c-text-1);
    border-radius: var(--border-radius);
    transition: background-color 0.2s ease;

    &.sending {
      pointer-events: none;
    }

    &.is-success {
      background-color: green !important;
      color: white !important;
    }

    &.is-error {
      background-color: red !important;
      color: white !important;
    }

    &:hover {
      background-color: lightgrey;
    }
  }

  .fieldset {
    margin-block-end: 1rem;
    display: flex;
    flex-direction: column;

    & > * {
      flex-grow: 1;
    }
  }
}

.dark .contact-form {
  input {
    background-color: #2b2a33;
  }

  button:hover {
    background-color: rgb(66, 66, 66);
  }
}
</style>
