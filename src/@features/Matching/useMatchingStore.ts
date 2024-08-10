import { create } from 'zustand';
import { MatchingDetail } from './type';

interface MatchingStore {
  matching: MatchingDetail | null;
}

interface Actions {
  setMatching: (matching: MatchingDetail) => void;
  reset: () => void;
}

export const useMatchingStore = create<MatchingStore & Actions>((set) => ({
  matching: null,

  setMatching: (matching) => set({ matching }),
  reset: () => set({ matching: null }),
}));
