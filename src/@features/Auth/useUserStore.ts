import { create } from 'zustand';
import { UserInfo } from './type';

interface States {
  userInfo: UserInfo | null;
}

interface Actions {
  setUserInfo: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
}

export const useUserStore = create<States & Actions>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  clearUserInfo: () => set({ userInfo: null }),
}));
