import type { DefaultTheme } from 'vitepress';
import type { Medal } from './medals';

export interface EisvanaMember extends DefaultTheme.TeamMember {
  medals?: Medal[];
  pageLink?: string;
}

