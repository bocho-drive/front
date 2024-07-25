import { create } from 'zustand';

interface Props {
  isAuth: boolean;
}

interface Actions {}

export const useAuth = create<Props & Actions>(() => ({
  isAuth: true,
}));
