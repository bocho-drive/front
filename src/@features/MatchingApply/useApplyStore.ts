import { create } from 'zustand';

interface MatchingApplyStore {
  isAuthor: boolean;
}

interface Actions {
  setIsAuthor: (isAuthor: boolean) => void;
  reset: () => void;
}

export const useApplyStore = create<MatchingApplyStore & Actions>((set) => ({
  isAuthor: false,

  setIsAuthor: (isAuthor) => set({ isAuthor }),
  reset: () => set({ isAuthor: false }),
}));
