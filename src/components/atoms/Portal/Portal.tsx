import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import * as S from '@/styles/index.style';
import { usePortal } from './usePortal';

const rootId = 'portal-target';

interface Props {
  children: React.ReactNode;
}

const Portal = ({ children }: Props) => {
  const isOpen = usePortal((state) => state.isOpen);
  const handleClose = usePortal((state) => state.handleClose);
  // portal-root 요소를 찾습니다.
  const portalRoot = document.getElementById(rootId) as HTMLElement;
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (portalRef.current && !portalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // isOpen이 true일 때만 포털을 렌더링합니다.
  return isOpen
    ? ReactDOM.createPortal(
        <S.div.Overlay>
          <div ref={portalRef}>{children}</div>
        </S.div.Overlay>,
        portalRoot
      )
    : null;
};

export default Portal;
