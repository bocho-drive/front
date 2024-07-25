import { RefObject, useCallback, useEffect, useState } from 'react';

interface Position {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

interface RelativeModalProps {
  openType?: 'mouseover';
  closeType?: 'outside-click' | 'anywhere-click';
  targetRef: RefObject<HTMLElement>;
  modalRef?: RefObject<HTMLElement>;
}

export const useRelativeModal = ({ openType, closeType, targetRef, modalRef }: RelativeModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position>({ top: 0, left: 0, right: 0, bottom: 0 });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const setRelativePosition = useCallback((position: Position) => {
    setPosition(position);
  }, []);

  /** 모달창 열기/닫기 이벤트 */
  useEffect(() => {
    const handleOutsideClickClose = (e: MouseEvent) => {
      if (modalRef?.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    const currentTarget = targetRef.current;

    openType && currentTarget?.addEventListener(openType, handleOpen);
    closeType === 'outside-click' && document.addEventListener('mousedown', handleOutsideClickClose);
    closeType === 'anywhere-click' && document.addEventListener('click', handleClose);

    return () => {
      openType && currentTarget?.removeEventListener(openType, handleOpen);
      closeType === 'outside-click' && document.removeEventListener('mousedown', handleOutsideClickClose);
      closeType === 'anywhere-click' && document.removeEventListener('click', handleClose);
    };
  }, [openType, closeType, modalRef, targetRef]);

  return {
    isOpen,
    handleOpen,
    handleClose,
    setRelativePosition,
    position,
  };
};
export type RelativeModalType = ReturnType<typeof useRelativeModal>;
