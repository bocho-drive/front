import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import * as S from '@/styles/index.style';
import { useModal } from './useModal';

const docId = 'modal-target';

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const isOpen = useModal((state) => state.isOpen);
  const handleClose = useModal((state) => state.handleClose);
  // portal-root 요소를 찾습니다.
  const modalRoot = document.getElementById(docId) as HTMLElement;
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleClose]);

  // isOpen이 true일 때만 포털을 렌더링합니다.
  return isOpen
    ? ReactDOM.createPortal(
        <S.div.Overlay>
          <div ref={modalRef}>{children}</div>
        </S.div.Overlay>,
        modalRoot
      )
    : null;
};

export default Modal;
