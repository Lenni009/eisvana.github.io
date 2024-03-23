import type { MaybeRef } from 'vue';

export interface ContactFormParameters {
  requestType: MaybeRef<string>;
  requestText: MaybeRef<string>;
  contact: MaybeRef<string>;
}

export interface FeedbackData {
  experience: MaybeRef<number | undefined>;
  find: MaybeRef<string | undefined>;
  enjoy: MaybeRef<string | undefined>;
  good: MaybeRef<string | undefined>;
  bad: MaybeRef<string | undefined>;
  project: MaybeRef<string | undefined>;
  departments: MaybeRef<string | undefined>;
  structure: MaybeRef<number | undefined>;
  home: MaybeRef<number | undefined>;
  server: MaybeRef<number | undefined>;
  transparency: MaybeRef<number | undefined>;
  citizenValue: MaybeRef<number | undefined>;
  news: MaybeRef<number | undefined>;
  otherFeedback: MaybeRef<string | undefined>;
}
