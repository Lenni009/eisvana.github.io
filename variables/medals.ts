import type { MedalList } from '../types/medals';

export const medalCategories: Record<string, MedalList> = {
  fauna: {
    warn: { type: 'warning', icon: '/icons/apple-touch-icon.png', text: 'hi', achievement: 'Did stuff' },
    eisvana: {
      type: 'tip',
      icon: '/icons/apple-touch-icon.png',
      text: 'hello world',
      achievement: 'did some more stuff',
    },
  },
  starships: {
    test1: { type: 'info', icon: '/icons/apple-touch-icon.png', text: 'baum', achievement: 'did a lot of stuff' },
    test2: { type: 'danger', icon: '/icons/apple-touch-icon.png', text: 'test', achievement: 'failed to do stuff' },
  },
} as const;

const medalObjects = Object.values(medalCategories);
const mergedMedalObjects = medalObjects.map(Object.entries).flat(1);

export const medals: MedalList = Object.fromEntries(mergedMedalObjects);
