import { create } from 'zustand';
import { MatchingApply } from '../MatchingApply/type';

interface Store {
  isOpen: boolean;

  /** 매칭신청 ID */
  apply: MatchingApply | null;
}

interface Actions {
  handleChatContainerOpen: (isOpen: boolean, apply: MatchingApply) => void;
  handleChatContainerClose: () => void;
}

export const useChatContainerStore = create<Store & Actions>((set) => ({
  isOpen: false,
  apply: null,
  approvalKey: null,

  handleChatContainerOpen: (isOpen, apply) => {
    set({ isOpen, apply });
  },
  handleChatContainerClose: () => {
    set({ isOpen: false, apply: null });
  },
}));
