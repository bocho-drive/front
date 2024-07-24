import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import * as S from '@/styles/index.style';
import { useAuthModal } from './useAuthModal';
import LoginForm from '@/components/molecules/LoginForm';
import RegisterForm from '@/components/molecules/RegisterForm';

const docId = 'login-modal-target';

const AuthModal = () => {
  const [isLoginModal, setIsLoginModal] = useState(true);

  const isOpen = useAuthModal((state) => state.isOpen);
  const handleClose = useAuthModal((state) => state.handleClose);
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
              <S.button.IconButton onClick={() => setIsLoginModal(!isLoginModal)}>
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
