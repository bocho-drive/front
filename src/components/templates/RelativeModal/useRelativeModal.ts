import { create } from 'zustand';

interface Position {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

interface Props {
  isOpen: boolean;
  relativeRef: React.RefObject<HTMLElement>;
  position: Position;
}

interface Actions {
  handleOpen: () => void;
  handleClose: () => void;
  setRelativePosition: (position: Position) => void;
}

export const useRelativeModal = create<Props & Actions>((set) => ({
  isOpen: false,
  relativeRef: { current: null },
  position: { top: 0, left: 0, bottom: 0, right: 0 },

  handleOpen: () => set({ isOpen: true }),
  handleClose: () => set({ isOpen: false }),
  setRelativePosition: (position) => set({ position }),
}));
