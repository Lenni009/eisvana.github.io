export interface Medal {
  type: 'info' | 'tip' | 'warning' | 'danger';
  text: string;
  icon: string;
  amount?: number;
}

export type AvailableMedals = 'eisvana' | 'test1' | 'test2' | 'warn';
