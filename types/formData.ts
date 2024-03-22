import type { MaybeRef } from 'vue';

export interface ContactFormParameters {
  requestType: MaybeRef<string>;
  requestText: MaybeRef<string>;
  contact: MaybeRef<string>;
}
