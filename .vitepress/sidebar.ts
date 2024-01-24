import type { DefaultTheme } from "vitepress";

export function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "About Us",
      collapsed: false,
      items: [
        { text: "About", link: "/about" },
        { text: "Departments", link: "/departments" },
      ],
    },
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
