import { create } from 'zustand';

interface States {
  isOpen: boolean;
  openId: number | null;
  type: 'video' | 'challenge' | 'profile' | null;
}

interface Actions {
  handleOpen: (openId: States['openId'], type: States['type']) => void;
  handleClose: () => void;
  isShow: (id: number, type: States['type']) => boolean;
}

export const useModal = create<States & Actions>((set, get) => ({
  isOpen: false,
  openId: null,
  type: null,

  handleOpen: (openId, type) => set({ isOpen: true, openId, type }),
  handleClose: () => set({ isOpen: false, openId: null }),
  isShow: (id, type) => get().type === type && get().openId === id,
}));
