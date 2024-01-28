import type { DefaultTheme } from 'vitepress';

const route = '/about';

export function sidebarAbout(): DefaultTheme.SidebarItem[] {
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      text: 'About Us',
      collapsed: false,
      items: [
        { text: 'The Civ', link: '/civ' },
        { text: 'Departments', link: '/departments' },
        { text: 'Medals', link: '/medals' },
        { text: 'Community', link: '/community/' },
      ],
    },
    {
      items: [{ text: 'Services', base: '/services', link: '/apps' }],
    },
  ];

  for (const sidebarItem of sidebarItems) {
    sidebarItem.items?.forEach((item) => (item.base ??= route));
  }

  return sidebarItems;
}
