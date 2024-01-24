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

    footer: {
      message: 'Released under the <a href="https://github.com/Eisvana/eisvana.github.io/blob/main/LICENSE">GPLv3 License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/Eisvana">Eisvana</a>'
    }
  }
})
