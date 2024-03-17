import type { AvailableMedals, Medal } from '../types/medals';
import { medals } from '../variables/medals';

export const getMedal = (id: AvailableMedals, amount?: number): Medal => ({ ...medals[id], amount });
