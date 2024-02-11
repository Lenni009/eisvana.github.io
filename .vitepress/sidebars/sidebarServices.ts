import type { DefaultTheme } from 'vitepress';
import { prefixRoute } from '../../logic/routes';

export function sidebarServices(route: string): DefaultTheme.SidebarItem[] {
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      items: [
        { text: 'Apps', link: '/apps' },
        { text: 'Census', link: '/census' },
        { text: 'Links', link: '/links' },
        { text: 'Applications / Contact', link: '/contact' },
      ],
    },
  ];

  return prefixRoute(sidebarItems, route);
}
