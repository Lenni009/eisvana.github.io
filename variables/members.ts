import type { EisvanaMember } from '../types/member';
import { isEisvanaMember } from '../types/assertion';

// using `eager` to not get promises, since top-level await throws errors for some reason (not implemented in target browsers, despite target being ESNext)
const members = import.meta.glob('./members/*.ts', { eager: true, import: 'default' });
const memberItems = Object.values(members);
const wellFormedMembers = memberItems.filter(isEisvanaMember);

export const eisvanaMembers: EisvanaMember[] = wellFormedMembers;
