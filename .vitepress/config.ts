import { sidebarAbout } from './sidebarAbout';
import { sidebarServices } from './sidebarServices';
import { defineConfig } from 'vitepress';
import { socialLinks } from './socialLinks';
import { nav } from './nav';
import { head } from './head';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head,
  title: 'Eisvana',
  description: 'Eisvana Government Portal',
  cleanUrls: true,
  srcExclude: ['**/README.md'],
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },

    sidebar: {
      '/about/': sidebarAbout(),
      '/services/': sidebarServices(),
    },

    footer: {
      message:
        'Released under the <a href="https://github.com/Eisvana/eisvana.github.io/blob/main/LICENSE">GPLv3 License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/Eisvana">Eisvana</a>',
    },
    nav,
    socialLinks,
  },
});
