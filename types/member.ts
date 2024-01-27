import type { DefaultTheme } from 'vitepress';
import { Medal } from './medal';

export interface EisvanaMember extends DefaultTheme.TeamMember {
  medals?: Medal[];
  pageLink?: string;
}
