import { sidebar } from './sidebar';
import { defineConfig } from 'vitepress'
import { socials } from './socials';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eisvana",
  description: "Eisvana Government Portal",
  srcDir: 'pages',
  cleanUrls: true,
  head: [
    ['link', {rel: 'icon', href: '/icons/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '/globalStyle.css'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: 'https://nomanssky.fandom.com/wiki/Eisvana' },
    ],

    sidebar: sidebar(),
    socialLinks: socials(),
  }
})
