import { create } from 'zustand';

interface Props {
  isOpen: boolean;
  isLoginModal: boolean;
}

interface Actions {
  handleOpen: () => void;
  handleClose: () => void;
  setIsLoginModal: (isLogin: boolean) => void;
  toggleIsLoginModal: () => void;
}

export const useAuthModal = create<Props & Actions>((set) => ({
  isOpen: false,
  isLoginModal: true,

  handleOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
  setIsLoginModal: (isLogin) => set({ isLoginModal: isLogin }),
  toggleIsLoginModal: () => set((state) => ({ isLoginModal: !state.isLoginModal })),
}));
