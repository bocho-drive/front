import { loginToast, logoutToast, needLoginToast } from '@/components/atoms/Toast/useToast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Props {
  isAuth: boolean;
  token: string | null;
}

interface Actions {
  handleLogin: (token: string) => void;
  handleLogout: () => void;
  confirmAuth: () => boolean;
}

export const useAuth = create(
  persist<Props & Actions>(
    (set, get) => ({
      isAuth: false,
      token: null,

      handleLogin: (token) => {
        set({ isAuth: true, token });
        loginToast();
      },
      handleLogout: () => {
        set({ isAuth: false, token: null });
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
