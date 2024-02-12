<script setup lang="ts">
import { ref, computed } from 'vue';
import SubmitButton from './SubmitButton.vue';
import { buildContactFormData } from '../logic/createFormData';

const webhook = atob(import.meta.env.VITE_DISCORD_WEBHOOK ?? '');

const form = ref<HTMLFormElement | null>(null);

const contact = ref('');
const requestType = ref('');
const requestText = ref('');

const isIncomplete = computed(() => !contact.value || !requestType.value || !requestText.value);

const formData = computed(() => buildContactFormData({ requestText, requestType, contact }));

const clearData = () => form.value?.reset();
</script>

<template>
  <form
    class="pico"
    ref="form"
    @submit.prevent
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
    <SubmitButton
      :webhook
      :form-data-array="[formData]"
      :is-incomplete="isIncomplete"
      @success="clearData"
    />
  </form>
</template>
