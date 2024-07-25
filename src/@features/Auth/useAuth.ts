import { create } from 'zustand';

interface Props {
  isAuth: boolean;
}

interface Actions {
  handleLogin: () => void;
  handleLogout: () => void;
}

export const useAuth = create<Props & Actions>((set) => ({
  isAuth: false,

  handleLogin: () => {
    set({ isAuth: true });
  },
  handleLogout: () => {
    set({ isAuth: false });
  },
}));
