import { HeadConfig } from 'vitepress';

export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#280033' }],
  ['meta', { name: 'msapplication-config', content: '/icons/browserconfig.xml' }],
  ['meta', { name: 'msapplication-TileColor', content: '#280033' }],
  ['link', { rel: 'manifest', href: '/icons/site.webmanifest' }],
  ['link', { rel: 'icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' }],
  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
];
