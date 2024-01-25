import type { DefaultTheme } from 'vitepress';

export function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'About Us',
      collapsed: false,
      items: [
        { text: 'The Civ', link: '/civ' },
        { text: 'Departments', link: '/departments' },
      ],
    },
    {
      items: [{ text: 'Services', base: '/services/', link: '/apps' }],
    },
  ];
}
