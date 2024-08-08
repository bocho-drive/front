import { create } from 'zustand';
import { UserInfo } from './type';

interface States {
  userInfo: UserInfo | null;
}

interface Actions {
  setUserInfo: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
  isLogin: () => boolean;
}

export const useUserStore = create<States & Actions>((set, get) => ({
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  clearUserInfo: () => set({ userInfo: null }),
  isLogin: () => !!get().userInfo,
}));
