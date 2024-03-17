import { isEisvanaMember, type EisvanaMember } from '../types/member';
import { isObject } from './assertion';

const members = import.meta.glob('./members/*.ts');
const memberImports = Object.values(members);
const memberPromises = memberImports.map(async (memberFunction) => memberFunction());
const memberItems = await Promise.all(memberPromises);
const wellFormedMembers = memberItems
  .map((obj) => {
    if (isObject(obj) && 'default' in obj) return obj.default;
    return undefined;
  })
  .filter(isEisvanaMember);

export const eisvanaMembers: EisvanaMember[] = wellFormedMembers;
