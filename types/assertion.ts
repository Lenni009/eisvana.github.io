import type { EisvanaMember } from './member';

export const isObject = (item: unknown): item is Record<string, unknown> => typeof item === 'object' && item !== null;

export function isEisvanaMember(item: unknown): item is EisvanaMember {
  const requiredProperties: string[] = ['avatar', 'name'];
  const itemIsObject = isObject(item);
  if (!itemIsObject) return false;
  const requiredPropertiesArePresent = requiredProperties.every((prop) => prop in item);
  return requiredPropertiesArePresent;
}
