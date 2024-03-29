import type { DefaultTheme } from 'vitepress';
import { prefixRoute } from '../../logic/routes';

export function sidebarBlog(route: string): DefaultTheme.SidebarItem[] {
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      items: [
        { text: 'Home', link: '/' },
        { text: 'Create Blog', link: '/create' },
        {
          text: 'Lenni',
          collapsed: true,
          items: [{ text: 'Building this Website', link: '/lenni/building_this_website' }],
        },
        {
          text: 'YucaFrita',
          collapsed: true,
          items: [{ text: 'Greetings Eisvana!', link: '/yucafrita/greetings' }],
        },
        {
          text: 'Agent Bahann',
          collapsed: true,
          items: [{ text: 'A New World?', link: '/bahann/new_world' }],
        },
      ],
    },
  ];

  return prefixRoute(sidebarItems, route);
}
