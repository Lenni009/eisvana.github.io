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
    title: 'Register for the Census',
    details: 'Want to become an official citizen of Eisvana? No problem! Just fill out the form and let us know!',
    link: 'https://census.eisvana.com/form.html',
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
    title: 'Change or Update Census Base',
    details: 'You can update your census base, or define a new base to be listed on the census!',
    link: 'https://census.eisvana.com/table.html',
    linkText: 'Census Table',
  },
  {
    title: 'Anonymous Feedback',
    details: "Do you have any feedback for Eisvana's leadership? Send it here and help us improve!",
    link: './feedback',
    linkText: 'Feedback Form',
  },
];

const isExternalLink = (link: string) => link.startsWith('http');
</script>

<template>
  <div class="wrapper">
    <span class="subtitle">What do you want to do?</span>
    <PicoStyle>
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
    </PicoStyle>
  </div>
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
        display: block;
        text-align: center;
        border-block-start: var(--divider-color);
        border-end-end-radius: var(--pico-border-radius);
        border-end-start-radius: var(--pico-border-radius);
        transition:
          background-color var(--pico-transition),
          color var(--pico-transition),
          text-decoration-color var(--pico-transition);

        &:hover,
        &:active {
          color: white;
          background-color: var(--pico-primary-hover-background);
          text-decoration-color: var(--pico-primary-hover-background);
        }
      }
    }
  }
}
</style>
