import { create } from 'zustand';

interface States {
  refreshIssueCount: number;
}

interface Actions {
  increaseRefreshIssueCount: () => void;
  resetRefreshIssueCount: () => void;
}

/**
 * 리프레시 토큰 재발급 횟수 제어를 위한 store
 */
export const useRefreshStore = create<States & Actions>((set) => ({
  refreshIssueCount: 0,
  increaseRefreshIssueCount: () => set((state) => ({ refreshIssueCount: state.refreshIssueCount + 1 })),
  resetRefreshIssueCount: () => set({ refreshIssueCount: 0 }),
}));
