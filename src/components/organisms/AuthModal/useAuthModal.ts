import { create } from 'zustand';

interface Props {
  isOpen: boolean;
}

interface Actions {
  handleOpen: () => void;
  handleClose: () => void;
}

export const useAuthModal = create<Props & Actions>((set) => ({
  isOpen: false,
  handleOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
}));
