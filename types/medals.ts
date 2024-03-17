export interface Medal {
  type: 'info' | 'tip' | 'warning' | 'danger';
  text: string;
  icon: string;
  achievement: string;
  amount?: number;
}

export type MedalList = Partial<Record<AvailableMedals, Medal>>;

export type AvailableMedals = 'eisvana' | 'test1' | 'test2' | 'warn';
