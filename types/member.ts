import type { DefaultTheme } from 'vitepress';
import type { Medal } from './medal';
import { isObject } from '../variables/assertion';

export interface EisvanaMember extends DefaultTheme.TeamMember {
  medals?: Medal[];
  pageLink?: string;
}

export function isEisvanaMember(item: unknown): item is EisvanaMember {
  const requiredProperties: string[] = ['avatar', 'name'];
  const itemIsObject = isObject(item);
  if (!itemIsObject) return false;
  const requiredPropertiesArePresent = requiredProperties.every((prop) => prop in item);
  return requiredPropertiesArePresent;
}
