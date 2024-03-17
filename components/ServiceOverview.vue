<script setup lang="ts">
import PicoStyle from './PicoStyle.vue';
import { reactive } from 'vue';

interface Card {
  title: string;
  details: string;
  link: string;
  linkText: string;
}

const cards: Card[] = reactive([
  {
    title: 'Generate System Prefix',
    details: '',
    link: 'https://eisvana.github.io/Eisvana-System-Naming-Tools/',
    linkText: 'System Naming Tools',
  },
  {
    title: 'Renew Census',
    details: 'The census resets every year.\nRenew your entry here!',
    link: 'https://eisvana.github.io/Eisvana-Census-Renew',
    linkText: 'Renew Census Entry',
  },
  {
    title: 'Register a new Base for the Census',
    details: 'New citizen or just moving somewhere else? No problem! Just fill out the form and let us know!',
    link: 'https://forms.gle/A85N3NkYXkM5XXjx5',
    linkText: 'Census Form',
  },
  {
    title: 'Enter a Discovery to the Wiki',
    details: 'Submit a new discovery to our Wiki Scholars!',
    link: 'https://eisvana.github.io/Eisvana-Album-Entry/',
    linkText: 'Album Entry App',
  },
  {
    title: 'Apply for a Department',
    details: '',
    link: './contact',
    linkText: 'Contact Form',
  },
  {
    title: 'I need somewhere to explore',
    details: '',
    link: 'https://eisvana.github.io/Random-Eisvana-Glyphs-Generator/',
    linkText: 'Random Eisvana Glyphs',
  },
]);
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
            :rel="card.link.startsWith('http') ? 'noopener noreferrer' : undefined"
            :target="card.link.startsWith('http') ? '_blank' : undefined"
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: box-shadow var(--pico-transition);

      &:hover {
        box-shadow: 0px 0px 40px -18px rgba(134, 53, 156, 0.75);
      }

      .title {
        text-align: center;
        font-size: large;
        font-weight: bold;
        border: none;
        padding: 0;
      }

      .details {
        margin-block-end: 1.5rem;
        white-space: pre-line;
      }

      .link {
        text-align: center;
        margin: -1rem;
        padding: 1rem;
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
