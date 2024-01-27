<script setup lang="ts">
import { ref } from 'vue';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

const applicant = ref('');
const requestType = ref('');
const requestText = ref('');

async function submit() {
  await fetch(webhook, {
    method: 'POST',
    body: buildFormData(),
  });
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
              name: 'Notes',
              value: requestText.value,
            },
            {
              name: 'Contact',
              value: applicant.value,
            },
          ],
        },
      ],
    })
  );

  return formData;
}
</script>

<template>
  <label>Select your request:</label>
  <select v-model="requestType">
    <option value="Wiki Scholars Application">Wiki Scholars Application</option>
    <option value="Builder Collective Application">Builder Collective Application</option>
    <option value="Manager Application">Manager Application</option>
    <option value="Message for the Bridge">General Message to the Bridge</option>
  </select>
  <input
    v-model="applicant"
    type="text"
  />
  <textarea v-model="requestText"></textarea>
  <button @click="submit">Submit</button>
</template>

<style module>
input {
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.5rem;
}
</style>
