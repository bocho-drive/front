import * as S from '@/styles/index.style';
import { Fragment } from 'react/jsx-runtime';
import { useRelativeModal } from '../templates/RelativeModal/useRelativeModal';
import RelativeModal from '../templates/RelativeModal/RelativeModal';
import { useEffect, useRef } from 'react';

const UserProfile = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleOpen = useRelativeModal((state) => state.handleOpen);
  const setRelativePosition = useRelativeModal((state) => state.setRelativePosition);

  useEffect(() => {
    if (buttonRef && buttonRef.current) {
      const { top, left, right, bottom, height, width } = buttonRef.current.getBoundingClientRect();
      console.log({ top, left, right, bottom });

      setRelativePosition({
        top: top + height + 10,
        left: left - width - 100,
        bottom: 0,
        right: 0,
      });
    }
  }, [buttonRef, setRelativePosition]);

  return (
    <Fragment>
      <S.button.Avatar onClick={handleOpen} ref={buttonRef} />

      <RelativeModal>
        <S.div.Card $padding={10} style={{ backgroundColor: 'white' }}>
          <S.div.Column style={{ width: '200px' }}>
            <S.button.TextButton>마이페이지</S.button.TextButton>
            <S.button.TextButton>로그아웃</S.button.TextButton>
          </S.div.Column>
        </S.div.Card>
      </RelativeModal>
    </Fragment>
  );
};

export default UserProfile;
