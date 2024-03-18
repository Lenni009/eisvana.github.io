<script setup lang="ts">
import PicoStyle from './PicoStyle.vue';

interface Card {
  title: string;
  details: string;
  link: string;
  linkText: string;
}

const cards: Card[] = [
  {
    title: 'Generate System Prefix',
    details: 'Convert glyphs/coords to prefixes and vice versa, or just train renaming in a controlled environment.',
    link: 'https://eisvana.github.io/Eisvana-System-Naming-Tools/',
    linkText: 'System Naming Tools',
  },
  {
    title: 'Register a new Base for the Census',
    details: 'New citizen or just moving somewhere else? No problem! Just fill out the form and let us know!',
    link: 'https://forms.gle/A85N3NkYXkM5XXjx5',
    linkText: 'Census Form',
  },
  {
    title: 'Apply for a Department',
    details: 'Want to join a department, or create a new one? Apply here!',
    link: './contact',
    linkText: 'Contact Form',
  },
  {
    title: 'Enter a Discovery to the Wiki',
    details: 'Submit a new discovery to our Wiki Scholars!',
    link: 'https://eisvana.github.io/Eisvana-Album-Entry/',
    linkText: 'Album Entry App',
  },
  {
    title: 'Eisvana Discovery Spreadsheet',
    details: 'Record your findings so they are visible to everyone!',
    link: 'https://docs.google.com/spreadsheets/d/1IUxFWcqVa_dJ1RT4aDIHu048qrDWI-TPjSiOzlY2AHg/edit',
    linkText: 'Discovery Spreadsheet',
  },
  {
    title: 'Am I in Eisvana?',
    details: 'Not sure whether you are in Eisvana? Get a definitive answer here!',
    link: 'https://eisvana.github.io/amiineisvana/',
    linkText: 'Eisvana Region Checker',
  },
  {
    title: 'I need somewhere to explore',
    details: 'Eisvana contains over 3000 systems. Get glyphs to a random one here!',
    link: 'https://eisvana.github.io/Random-Eisvana-Glyphs-Generator/',
    linkText: 'Random Eisvana Glyphs',
  },
  {
    title: 'Renew Census',
    details: 'The census resets every year.\nRenew your entry here!',
    link: 'https://eisvana.github.io/Eisvana-Census-Renew',
    linkText: 'Renew Census Entry',
  },
  {
    title: 'Anonymous Feedback',
    details: "Do you have any feedback for Eisvana's leadership? Send it here and help us improve!",
    link: 'https://forms.gle/NRBJ8avd7eeVikBZA',
    linkText: 'Feedback Form',
  },
];

const isExternalLink = (link: string) => link.startsWith('http');
</script>

<template>
  <PicoStyle>
    <div class="wrapper">
      <span class="subtitle">What do you want to do?</span>
      <div class="flex">
        <article v-for="card in cards">
          <h2 class="title">{{ card.title }}</h2>
          <p class="details">{{ card.details }}</p>
          <a
            :href="card.link"
            :rel="isExternalLink(card.link) ? 'noopener noreferrer' : undefined"
            :target="isExternalLink(card.link) ? '_blank' : undefined"
            class="link"
            >{{ card.linkText }}</a
          >
        </article>
      </div>
    </div>
  </PicoStyle>
</template>

<style scoped lang="scss">
.wrapper {
  margin-block-start: 1rem;

  .subtitle {
    font-size: large;
  }

  .flex {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(30%, 300px), 1fr));
    gap: 1rem;
    margin-block-start: 1rem;

    article {
      --divider-color: 1px solid rgba(128, 128, 128, 0.212);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: box-shadow var(--pico-transition);

      &:hover {
        box-shadow: 0px 0px 40px -18px rgba(134, 53, 156, 0.75);
      }

      & > * {
        margin: -1rem;
        padding: 1rem;
      }

      .title {
        text-align: center;
        font-size: large;
        font-weight: bold;
        border: none;
        border-block-end: var(--divider-color);
      }

      .details {
        margin-block: 0.5rem;
        white-space: pre-line;
      }

      .link {
        border-block-start: var(--divider-color);
        display: block;
        text-align: center;
        transition:
          background-color var(--pico-transition),
          color var(--pico-transition),
          text-decoration-color var(--pico-transition);
        border-end-end-radius: var(--pico-border-radius);
        border-end-start-radius: var(--pico-border-radius);

        &:hover {
          background-color: var(--pico-primary-hover-background);
          color: white;
          text-decoration-color: var(--pico-primary-hover-background);
        }
      }
    }
  }
}
</style>
