import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import * as S from '@/styles/index.style';
import { ModalType, useModal } from './useModal';
import { useSearchParams } from 'react-router-dom';

const docId = 'modal-target';

interface Props {
  children: React.ReactNode;
  id: number;
  type: ModalType;
}

const Modal = ({ children, type, id }: Props) => {
  // 렌더링이 의도되도록 selector state 미사용
  const { isShow, handleClose, handleOpen } = useModal((state) => state);

  const modalRoot = document.getElementById(docId) as HTMLElement;
  const modalRef = useRef<HTMLDivElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  // * URL에 modalId, modalType이 있을 경우 모달 열기
  useEffect(() => {
    const modalId = searchParams.get('modalId');
    const modalType = searchParams.get('modalType');
    handleOpen(Number(modalId), modalType as ModalType);
  }, [searchParams, handleOpen]);

  // * 모달 외부 클릭시 닫기
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
        setSearchParams({ modalId: '', modalType: '' });
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [handleClose, setSearchParams]);

  /**
    //! useModal hook으로 효율적으로 관리하는 방법 알아보기
    // 지금같은 경우는 useModal하나로 관리되고 있기 때문에, 관련없는 modal또한 계산되고 있음
    // console.log('render modal');
    //! 1000개의 모달로 테스트시, 100ms 정도 걸림
    // console.log(new Date().getTime());
   */

  if (!isShow(id, type)) return null;
  return ReactDOM.createPortal(
    <S.div.Overlay>
      <div ref={modalRef}>{children}</div>
    </S.div.Overlay>,
    modalRoot
  );
};

export default Modal;
