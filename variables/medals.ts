import type { AvailableMedals, Medal } from '../types/medal';

export const medals: Record<AvailableMedals, Medal> = {
  warn: { type: 'warning', icon: '/icons/apple-touch-icon.png', text: 'hi' },
  eisvana: { type: 'tip', icon: '/icons/apple-touch-icon.png', text: 'hello world' },
  test1: { type: 'info', icon: '/icons/apple-touch-icon.png', text: 'baum' },
  test2: { type: 'danger', icon: '/icons/apple-touch-icon.png', text: 'test' },
} as const;
