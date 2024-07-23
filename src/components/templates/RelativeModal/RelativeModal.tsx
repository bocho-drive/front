import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import * as S from '@/styles/index.style';

import { useRelativeModal } from './useRelativeModal';

const docId = 'modal-target';

interface Props {
  children: React.ReactNode;
}

const RelativeModal = ({ children }: Props) => {
  const isOpen = useRelativeModal((state) => state.isOpen);
  const handleClose = useRelativeModal((state) => state.handleClose);
  const position = useRelativeModal((state) => state.position);

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
        <S.div.RelativeModal ref={modalRef} $top={position.top} $left={position.left} $bottom={position.bottom} $right={position.right}>
          {children}
        </S.div.RelativeModal>,
        modalRoot
      )
    : null;
};

export default RelativeModal;
