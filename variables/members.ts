import type { EisvanaMember } from '../types/member';
import { isEisvanaMember, isObject } from '../types/assertion';

// using `eager` to not get promises, since top-level await throws errors for some reason (not implemented in target browsers, despite target being ESNext)
const members = import.meta.glob('./members/*.ts', {eager: true});
const memberItems = Object.values(members);
const wellFormedMembers = memberItems
  .map((obj) => {
    if (isObject(obj) && 'default' in obj) return obj.default;
    return undefined;
  })
  .filter(isEisvanaMember);

export const eisvanaMembers: EisvanaMember[] = wellFormedMembers;
