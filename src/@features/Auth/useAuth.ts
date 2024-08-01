import { logoutToast, needLoginToast } from '@/components/atoms/Toast/useToast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoginRes } from './type';

interface Props {
  /** 인가 유효 여부 */
  isAuth: boolean;
  token: string | null;
  userId: number | null;
}

interface Actions {
  handleLogin: (loginInfo: LoginRes) => void;
  handleLogout: () => void;
  confirmAuth: () => boolean;
}

export const useAuth = create(
  persist<Props & Actions>(
    (set, get) => ({
      isAuth: false,
      token: null,
      userId: null,

      handleLogin: (loginInfo) => {
        set({ isAuth: true, token: loginInfo.accessToken, userId: loginInfo.userId });
      },
      handleLogout: () => {
        set({ isAuth: false, token: null, userId: null });
        logoutToast();
      },

      confirmAuth: () => {
        const { isAuth } = get();
        if (!isAuth) needLoginToast();
        return isAuth;
      },
    }),
    { name: 'auth' }
  )
);
