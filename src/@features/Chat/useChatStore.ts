import { create } from 'zustand';

interface Store {
  isOpen: boolean;
}

interface Actions {
  setIsOpen: (isOpen: boolean) => void;
}

export const useChatStore = create<Store & Actions>((set) => ({
  isOpen: true,

  setIsOpen: (isOpen) => set({ isOpen }),
}));
