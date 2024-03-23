<script setup lang="ts">
import PicoStyle from './PicoStyle.vue';
import Scale from './Scale.vue';
import MultipleChoice from './MultipleChoice.vue';
import { ref, reactive, computed, watchEffect } from 'vue';
import SubmitButton from './SubmitButton.vue';
import CharacterCounterTextarea from './CharacterCounterTextarea.vue';
import type { FeedbackData } from '../types/formData';
import { buildFeedbackFormData } from '../logic/createFormData';
import { maxLength } from '../variables/formValidation';

const webhook = atob(import.meta.env.VITE_DISCORD_FEEDBACK_WEBHOOK ?? '');

const experience = ref<number>();
const find = ref<string>();
const enjoy = ref<string>();
const good = ref<string>();
const bad = ref<string>();
const project = ref<string>();
const departments = ref<string>();
const structure = ref<number>();
const home = ref<number>();
const server = ref<number>();
const transparency = ref<number>();
const citizenValue = ref<number>();
const news = ref<number>();
const otherFeedback = ref<string>();

const findItems = {
  discord: 'Discord',
  reddit: 'Reddit',
  wiki: 'Wiki',
  friend: 'Friend',
};

const departmentItems = {
  yes: 'Yes',
  no: 'No',
};

const feedbackData: FeedbackData = reactive({
  experience,
  find,
  enjoy,
  good,
  bad,
  project,
  departments,
  structure,
  home,
  server,
  transparency,
  citizenValue,
  news,
  otherFeedback,
});

watchEffect(() => (otherFeedback.value = otherFeedback.value?.slice(0, maxLength)));

const isFilledOut = computed(() => Object.entries(feedbackData).some((item) => item[1]));

const formData = computed(() => buildFeedbackFormData(feedbackData));
</script>

<template>
  <form @submit.prevent>
    <PicoStyle>
      <div class="questions">
        <article>
          <p class="title">How would you rate your overall experience in Eisvana?</p>
          <Scale
            v-model="experience"
            high="Good"
            low="Bad"
            name="experience"
          />
        </article>

        <article>
          <p class="title">How did you find Eisvana?</p>
          <MultipleChoice
            v-model="find"
            :items="findItems"
            :other="true"
            name="find"
          />
        </article>

        <article>
          <p class="title">What do you enjoy doing in game?</p>
          <p class="explanation">E.g. building, exploration, documentation, quests, Sentinel fights, PvP, etc.</p>
          <input
            v-model="enjoy"
            :maxlength="maxLength"
            type="text"
          />
        </article>

        <article>
          <p class="title">What does Eisvana do well?</p>
          <input
            v-model="good"
            :maxlength="maxLength"
            type="text"
          />
        </article>

        <article>
          <p class="title">What could be improved?</p>
          <input
            v-model="bad"
            :maxlength="maxLength"
            type="text"
          />
        </article>

        <article>
          <p class="title">What kind of project would you like to participate in?</p>
          <p>What are you passionate about and would like to see us do?</p>
          <input
            v-model="project"
            :maxlength="maxLength"
            type="text"
          />
        </article>

        <article>
          <p class="title">Do you know about Eisvana's departments?</p>
          <p>E.g. EBC, Wiki Scholars</p>
          <MultipleChoice
            v-model="departments"
            :items="departmentItems"
            name="departments"
          />
        </article>

        <article>
          <p class="title">How much do you agree with the following statements?</p>
        </article>

        <article>
          <p class="title">I understand Eisvana's organisational and leadership structure</p>
          <Scale
            v-model="structure"
            high="Agree"
            low="Disagree"
            name="structure"
          />
        </article>

        <article>
          <p class="title">I feel "at home" in Eisvana</p>
          <Scale
            v-model="home"
            high="Agree"
            low="Disagree"
            name="home"
          />
        </article>

        <article>
          <p class="title">Eisvana's Discord server is organised</p>
          <Scale
            v-model="server"
            high="Agree"
            low="Disagree"
            name="server"
          />
        </article>

        <article>
          <p class="title">Eisvana's leadership is committed to transparency</p>
          <Scale
            v-model="transparency"
            high="Agree"
            low="Disagree"
            name="transparency"
          />
        </article>

        <article>
          <p class="title">Eisvana's leadership values Eisvana's citizens</p>
          <Scale
            v-model="citizenValue"
            high="Agree"
            low="Disagree"
            name="citizen-value"
          />
        </article>

        <article>
          <p class="title">I am well informed about latest developments and projects</p>
          <Scale
            v-model="news"
            high="Agree"
            low="Disagree"
            name="news"
          />
        </article>

        <article>
          <p class="title">Do you have any other feedback?</p>
          <CharacterCounterTextarea v-model="otherFeedback" />
        </article>
      </div>

      <SubmitButton
        v-if="isFilledOut"
        :webhook
        :form-data-array="[formData]"
      />
    </PicoStyle>
  </form>
</template>

<style scoped lang="scss">
.questions {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .title {
    font-weight: bold;
    margin-block-end: 0.5rem;

    &:only-child {
      margin: 0;
    }
  }
}
</style>
