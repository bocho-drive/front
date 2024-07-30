import { CommunityDetailRes } from '@/@features/Communities/type';
import { create } from 'zustand';

type Post = CommunityDetailRes;

interface States {
  isEditMode: boolean;
  currentPost: Post | null;
}

interface Actions {
  toggleEditMode: () => void;
  closeEditMode: () => void;
  setCurrentPost: (post: Post | null) => void;
}

export const usePost = create<States & Actions>((set) => ({
  isEditMode: false,
  currentPost: null,

  toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
  closeEditMode: () => set({ isEditMode: false }),
  setCurrentPost: (post) => set({ currentPost: post }),
}));
