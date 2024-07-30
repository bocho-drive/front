import { loginToast, logoutToast, needLoginToast } from '@/components/atoms/Toast/useToast';
import { create } from 'zustand';

interface Props {
  isAuth: boolean;
}

interface Actions {
  handleLogin: () => void;
  handleLogout: () => void;
  confirmAuth: () => boolean;
}

export const useAuth = create<Props & Actions>((set, get) => ({
  isAuth: false,

  handleLogin: () => {
    set({ isAuth: true });
    loginToast();
  },
  handleLogout: () => {
    set({ isAuth: false });
    logoutToast();
  },

  confirmAuth: () => {
    const { isAuth } = get();
    if (!isAuth) needLoginToast();
    return isAuth;
  },
}));
