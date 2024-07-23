import React from 'react';
import ReactDOM from 'react-dom';

import * as S from '@/styles/index.style';
import { usePortal } from './usePortal';

const rootId = 'portal-target';

interface Props {
  children: React.ReactNode;
}

const Portal = ({ children }: Props) => {
  const isOpen = usePortal((state) => state.isOpen);
  // portal-root 요소를 찾습니다.
  const portalRoot = document.getElementById(rootId) as HTMLElement;

  // isOpen이 true일 때만 포털을 렌더링합니다.
  return isOpen ? ReactDOM.createPortal(<S.div.Overlay>{children}</S.div.Overlay>, portalRoot) : null;
};

export default Portal;
