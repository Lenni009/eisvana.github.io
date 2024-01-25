import type { DefaultTheme } from 'vitepress';

export function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        { text: 'Apps', link: '/apps' },
        { text: 'Census', link: '/census' },
        { text: 'Links', link: '/links' },
      ],
    },
  ];
}
