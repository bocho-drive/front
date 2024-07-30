import { create } from 'zustand';

interface States {
  isLoading: boolean;
}

interface Actions {
  showLoading: () => void;
  hideLoading: () => void;
}

export const useLoadingModal = create<States & Actions>((set) => ({
  isLoading: false,
  showLoading: () => set({ isLoading: true }),
  hideLoading: () => set({ isLoading: false }),
}));
