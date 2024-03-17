import type { DefaultTheme } from 'vitepress';
import { prefixRoute } from '../../logic/routes';

// TODO: Create the commented-out pages

export function sidebarAbout(route: string): DefaultTheme.SidebarItem[] {
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      text: 'About Us',
      collapsed: false,
      items: [
        { text: 'The Civ', link: '/civ' },
        { text: 'Discord', link: '/discord' },
        // { text: 'News', link: '/news' },
        { text: 'Departments', link: '/departments' },
        // { text: 'Medals', link: '/medals' },
        // { text: 'Community', link: '/community/' },
      ],
    },
    {
      items: [
        { text: 'Government Portal', base: '/services', link: '/apps' },
        // { text: 'Blogs', base: '/blog', link: '/' },
      ],
    },
  ];

  return prefixRoute(sidebarItems, route);
}
