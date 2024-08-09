import React from 'react';
import ReactDOM from 'react-dom';

import * as S from '@/styles/index.style';

import { RelativeModalType } from './useRelativeModal';

const docId = 'modal-target';

interface Props {
  children: React.ReactNode;
  relativeModal: RelativeModalType;
}

const RelativeModal = ({ children, relativeModal }: Props) => {
  const { position } = relativeModal;

  const modalRoot = document.getElementById(docId) as HTMLElement;

  // isOpen이 true일 때만 포털을 렌더링합니다.
  return ReactDOM.createPortal(
    <S.div.RelativeModal $top={position.top} $left={position.left} $bottom={position.bottom} $right={position.right}>
      {children}
    </S.div.RelativeModal>,
    modalRoot
  );
};

export default RelativeModal;
