import { create } from 'zustand';

interface Store {
  isOpen: boolean;

  /** 매칭신청 ID */
  applyId: number | null;
}

interface Actions {
  handleChatContainerOpen: (isOpen: boolean, applyId: number) => void;
  handleChatContainerClose: () => void;
}

export const useChatContainerStore = create<Store & Actions>((set) => ({
  isOpen: false,
  applyId: null,
  approvalKey: null,

  handleChatContainerOpen: (isOpen, applyId) => {
    set({ isOpen, applyId });
  },
  handleChatContainerClose: () => {
    set({ isOpen: false, applyId: null });
  },
}));
