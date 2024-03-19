import type { DefaultTheme } from 'vitepress';
import { prefixRoute } from '../../logic/routes';

export function sidebarBlog(route: string): DefaultTheme.SidebarItem[] {
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      items: [
        { text: 'Home', link: '/' },
        { text: 'Create Blog', link: '/create' },
        {
          text: "Lenni",
          collapsed: true,
          items: [{ text: 'Building this Website', link: '/lenni/building_this_website' }],
        },
      ],
    },
  ];

  return prefixRoute(sidebarItems, route);
}
