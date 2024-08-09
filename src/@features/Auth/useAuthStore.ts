import { create } from 'zustand';
import { UserInfo } from './type';
import { persist } from 'zustand/middleware';
import { needLoginToast } from '@/components/atoms/Toast/useToast';
import { clearToken, setAccessToken } from '@/util/tokenUtil';

interface States {
  userInfo: UserInfo | null;
}

interface Actions {
  setUserInfo: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
  isLogin: () => boolean;
  confirmAuth: () => boolean;
  handleLogout: () => void;
}

export const useAuthStore = create(
  persist<States & Actions>(
    (set, get) => ({
      userInfo: null,
      setUserInfo: (userInfo) => set({ userInfo }),
      clearUserInfo: () => set({ userInfo: null }),
      isLogin: () => !!get().userInfo,
      confirmAuth: () => {
        const { isLogin } = get();
        if (!isLogin()) needLoginToast();
        return isLogin();
      },
      // TODO 추가 구현 필요
      handleLogout: () => {
        set({ userInfo: null });
        clearToken();
      },
    }),
    { name: 'auth_store' }
  )
);
