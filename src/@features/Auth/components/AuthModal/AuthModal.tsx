import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import * as S from '@/styles/index.style';
import { useAuthModal } from './useAuthModal';
import LoginForm from '@/@features/Auth/components/LoginForm';
import RegisterForm from '@/@features/Auth/components/RegisterForm';

const docId = 'login-modal-target';

const AuthModal = () => {
  const { handleClose, isLoginModal, isOpen, toggleIsLoginModal } = useAuthModal((state) => ({
    isOpen: state.isOpen,
    isLoginModal: state.isLoginModal,
    handleClose: state.handleClose,
    toggleIsLoginModal: state.toggleIsLoginModal,
  }));

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
          <S.div.FixedModal ref={modalRef} style={{ padding: '30px' }}>
            {isLoginModal ? <LoginForm /> : <RegisterForm />}
            <S.div.Row $justify="center" style={{ marginTop: '20px' }}>
              <S.button.IconButton onClick={toggleIsLoginModal}>
                <S.h.H4>{isLoginModal ? '회원가입' : '로그인'}</S.h.H4>
              </S.button.IconButton>
            </S.div.Row>
          </S.div.FixedModal>
        </S.div.Overlay>,
        modalRoot
      )
    : null;
};

export default AuthModal;
