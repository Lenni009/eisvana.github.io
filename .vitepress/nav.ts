import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  { text: 'About', link: '/about/civ', activeMatch: '/about/' },
  { text: 'Services', link: '/services/apps', activeMatch: '/services/' },
  // { text: 'Blogs', link: '/blog/', activeMatch: '/blog/' },
  { text: 'Wiki', link: 'https://nomanssky.fandom.com/wiki/Eisvana' },
];
