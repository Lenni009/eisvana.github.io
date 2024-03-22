import { unref } from 'vue';
import type { ContactFormParameters } from '../types/formData';
import { escapeFileName } from './fileNameEscape';

export function buildTextFileFormData(content: string, category: string) {
  const file = new File([content], `${escapeFileName(category)}.md`, { type: 'text/plain' });

  // initialising form data object
  const formData = new FormData();
  formData.append('file', file);
  formData.append(
    'payload_json',
    JSON.stringify({
      content: `Category: ${category}`,
      allowed_mentions: {
        parse: [],
      },
    })
  );

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
      allowed_mentions: {
        parse: [],
      },
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

export function buildMixedFormData(name: string, shortDesc: string, content: string, file: File) {
  const contentFile = new File([content], `${escapeFileName(name)}.md`, { type: 'text/plain' });
  const formData = new FormData();

  formData.append('image', file);
  formData.append(
    'payload_json',
    JSON.stringify({
      allowed_mentions: {
        parse: [],
      },
      embeds: [
        {
          title: 'New Player Page Submission',
          image: {
            url: 'attachment://' + file.name,
          },
          fields: [
            {
              name: 'Name',
              value: name,
            },
            {
              name: 'Short Description',
              value: '```' + shortDesc + '```',
            },
          ],
        },
      ],
    })
  );
  if (content) formData.append('content', contentFile);

  return formData;
}
