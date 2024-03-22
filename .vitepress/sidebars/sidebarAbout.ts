import type { DefaultTheme } from 'vitepress';
import { prefixRoute } from '../../logic/routes';

export function sidebarAbout(route: string): DefaultTheme.SidebarItem[] {
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      text: 'About Us',
      items: [
        { text: 'About Eisvana', link: '/' },
        { text: 'Discord', link: '/discord' },
        { text: 'How to Join', link: '/joining' },
        { text: 'News', link: '/news' },
        { text: 'FAQ', link: '/faq' },
      ],
    },
    {
      text: 'Guidelines',
      items: [
        { text: 'Rules', link: '/rules' },
        { text: 'Naming Guidelines', link: '/naming' },
      ],
    },
    {
      text: 'Participating',
      items: [
        { text: 'Departments', link: '/departments' },
        { text: 'Medals', link: '/medals' },
      ],
    },
    {
      text: 'Community',
      items: [
        { text: 'Citizens', link: '/community/' },
        { text: 'Blogs', base: '/blog', link: '/' },
      ],
    },
  ];

  return prefixRoute(sidebarItems, route);
}
