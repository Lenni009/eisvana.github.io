import type { DefaultTheme } from 'vitepress';
import { prefixRoute } from '../../logic/routes';

export function sidebarServices(route: string): DefaultTheme.SidebarItem[] {
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      items: [
        { text: 'Government Services', link: '/' },
        { text: 'Apps', link: '/apps' },
        { text: 'Census', link: '/census' },
        { text: 'Platforms', link: '/platforms' },
        { text: 'Applications / Contact', link: '/contact' },
        // { text: 'Feedback', link: '/feedback' },
      ],
    },
  ];

  return prefixRoute(sidebarItems, route);
}
