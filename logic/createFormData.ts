import { unref } from 'vue';
import type { ContactFormParameters, FeedbackData } from '../types/formData';
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

export function buildFeedbackFormData(feedbackData: FeedbackData) {
  const data: [string, string | number | undefined][] = Object.entries(feedbackData);
  const cleanedFeedbackData: [string, string | number][] = data.map((item) => [item[0], item[1] || 'No answer given']); // NoSonar I need the check for empty strings

  const cleanedFeedbackDataObj = Object.fromEntries(cleanedFeedbackData);

  const {
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
  } = cleanedFeedbackDataObj;

  const formData = new FormData();

  formData.append(
    'payload_json',
    JSON.stringify({
      allowed_mentions: {
        parse: [],
      },
      embeds: [
        {
          title: 'Feedback Submitted',
          fields: [
            {
              name: 'Rate your overall experience in Eisvana (1-5)',
              value: unref(experience),
            },
            {
              name: 'How did you find Eisvana?',
              value: unref(find),
            },
            {
              name: 'What do you enjoy doing in game?',
              value: unref(enjoy),
            },
            {
              name: 'What does Eisvana do well?',
              value: unref(good),
            },
            {
              name: 'What could be improved?',
              value: unref(bad),
            },
            {
              name: 'What kind of project would you participate in?',
              value: unref(project),
            },
            {
              name: "Do you know about Eisvana's departments?",
              value: unref(departments),
            },
            {
              name: 'How much do you agree with these statements (1-5)',
            },
            {
              name: "I understand Eisvana's organisational structure",
              value: unref(structure),
            },
            {
              name: 'I feel "at home" in Eisvana',
              value: unref(home),
            },
            {
              name: 'Discord server is organised',
              value: unref(server),
            },
            {
              name: 'Leadership is transparent',
              value: unref(transparency),
            },
            {
              name: 'Citizens are valued',
              value: unref(citizenValue),
            },
            {
              name: 'I know about latest projects:',
              value: unref(news),
            },
            {
              name: 'Other feedback:',
              value: unref(otherFeedback),
            },
          ],
        },
      ],
    })
  );

  return formData;
}
