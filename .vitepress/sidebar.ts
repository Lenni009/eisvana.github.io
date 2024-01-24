import type { DefaultTheme } from "vitepress";

export function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Services",
      collapsed: false,
      items: [
        { text: "Apps", link: "/apps" },
        { text: "Census", link: "/census" },
        { text: "Links", link: "/links" },
      ],
    },
  ];
}
