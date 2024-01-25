import type { DefaultTheme } from 'vitepress';

export function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'About', link: '/about/civ', activeMatch: '/about/' },
    { text: 'Services', link: '/services/apps', activeMatch: '/services/' },
    { text: 'Wiki', link: 'https://nomanssky.fandom.com/wiki/Eisvana' },
  ];
}
