import { unref } from 'vue';
import type { ContactFormParameters } from '../types/formData';

export function buildTextFileFormData(content: string) {
  const file = new File([content], 'blog.md', { type: 'text/plain' });

  // initialising form data object
  const formData = new FormData();
  formData.append('file', file);

  return formData;
}

export function buildImageFormData(fileArray: File[]) {
  // initialising form data object
  const formData = new FormData();
  for (let i = 0; i < (fileArray?.length ?? 0); i++) {
    const file = fileArray?.[i];
    if (!file) continue;
    formData.append(`image${i}`, file);
  }

  return formData;
}

export function buildContactFormData({ requestType, requestText, contact }: ContactFormParameters) {
  // initialising form data object
  const formData = new FormData();

  // filling form data object
  formData.append(
    'payload_json',
    JSON.stringify({
      embeds: [
        {
          title: unref(requestType),
          fields: [
            {
              name: 'Message',
              value: unref(requestText),
            },
            {
              name: 'Contact',
              value: unref(contact),
            },
          ],
        },
      ],
    })
  );

  return formData;
}
