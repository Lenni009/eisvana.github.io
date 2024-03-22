import type { DefaultTheme } from 'vitepress';

/**
 * This is the top-right nav
 */
export const nav: DefaultTheme.NavItem[] = [
  { text: 'About', link: '/about/', activeMatch: '/about/' },
  { text: 'Government Services', link: '/services/', activeMatch: '/services/' },
  { text: 'Blogs', link: '/blog/', activeMatch: '/blog/' },
  { text: 'Wiki', link: 'https://nomanssky.fandom.com/wiki/Eisvana' },
];
