import { Category } from '@/@features/Community/type';
import { create } from 'zustand';

interface States {
  category: Category;
}

interface Actions {
  setCategory: (category: Category) => void;
}

export const useCommunityCategory = create<States & Actions>((set) => ({
  category: 'GENERAL',
  setCategory: (category) => set({ category }),
}));
