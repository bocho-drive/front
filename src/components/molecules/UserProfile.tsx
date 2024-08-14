import * as S from '@/styles/index.style';
import { useEffect, useRef } from 'react';
import { Fragment } from 'react/jsx-runtime';
import RelativeModal from '../templates/RelativeModal/RelativeModal';
import { useRelativeModal } from '../templates/RelativeModal/useRelativeModal';
import { useAuthStore } from '@/@features/Auth/useAuthStore';
import { signOut } from '@/@features/Auth/api';

const UserProfile = () => {
  const handleLogout = useAuthStore((state) => state.handleLogout);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const relativeModal = useRelativeModal({
    modalRef,
    targetRef: buttonRef,
    closeType: 'outside-click',
  });
  const { setRelativePosition, handleOpen, isOpen } = relativeModal;

  useEffect(() => {
    if (buttonRef && buttonRef.current) {
      const { top, left, height, width } = buttonRef.current.getBoundingClientRect();

      setRelativePosition({
        top: top + height + 10,
        left: left - width - 100,
        bottom: 0,
        right: 0,
      });
    }
  }, [setRelativePosition]);

  const _handleLogout = async () => {
    await signOut();
    handleLogout();
  };

  return (
    <Fragment>
      <S.button.Button ref={buttonRef} onClick={handleOpen} $colors="primary">
        MY
      </S.button.Button>

      {isOpen && (
        <RelativeModal relativeModal={relativeModal}>
          <S.div.Card $padding={10} style={{ backgroundColor: 'white' }} ref={modalRef}>
            <S.div.Column style={{ width: '200px' }}>
              <S.a.Link to="/my">마이페이지</S.a.Link>
              <S.button.TextButton onClick={_handleLogout}>로그아웃</S.button.TextButton>
            </S.div.Column>
          </S.div.Card>
        </RelativeModal>
      )}
    </Fragment>
  );
};

export default UserProfile;
