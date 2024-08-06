import { logoutToast, needLoginToast } from '@/components/atoms/Toast/useToast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LoginRes, UserRole } from './type';

interface Props {
  /** 인가 유효 여부 */
  isAuth: boolean;
  token: string | null;
  userId: number | null;
  userRole: UserRole | null;
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
      userRole: null,

      handleLogin: (loginInfo) => {
        set({ isAuth: true, token: loginInfo.accessToken, userId: loginInfo.userId, userRole: loginInfo.userRole });
      },
      handleLogout: () => {
        set({ isAuth: false, token: null, userId: null, userRole: null });
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
