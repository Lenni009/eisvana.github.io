import type { DefaultTheme } from 'vitepress';
import { prefixRoute } from '../../logic/routes';

export function sidebarBlog(route: string): DefaultTheme.SidebarItem[] {
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      items: [
        { text: 'Home', link: '/' },
        { text: 'Create Blog', link: '/create' },
        {
          text: "Yuca's Shipyard",
          collapsed: true,
          items: [{ text: 'Iobay Singer V', link: '/yuca/iobay_singer_v' }],
        },
      ],
    },
  ];

  return prefixRoute(sidebarItems, route);
}
