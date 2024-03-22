import type { DefaultTheme } from 'vitepress';

export function prefixRoute(sidebarItems: DefaultTheme.SidebarItem[], route: string): DefaultTheme.SidebarItem[] {
  const prefixedSidebarItems = structuredClone(sidebarItems);

  for (const sidebarItem of prefixedSidebarItems) {
    sidebarItem.items?.forEach((item) => (item.base ??= route));
  }

  return prefixedSidebarItems;
}
