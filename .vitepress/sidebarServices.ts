import type { DefaultTheme } from 'vitepress';

const route = '/services';

export function sidebarServices(): DefaultTheme.SidebarItem[] {
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      items: [
        { text: 'Apps', link: '/apps' },
        { text: 'Census', link: '/census' },
        { text: 'Links', link: '/links' },
      ],
    },
  ];

  for (const sidebarItem of sidebarItems) {
    sidebarItem.items?.forEach((item) => (item.base ??= route));
  }

  return sidebarItems;
}
