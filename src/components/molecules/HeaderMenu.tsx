import { useRef, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as S from '@/styles/index.style';
import { useRelativeModal } from '../templates/RelativeModal/useRelativeModal';
import RelativeModal from '../templates/RelativeModal/RelativeModal';

const HeaderMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const relativeModal = useRelativeModal({
    targetRef: menuRef,
    modalRef: modalRef,
    openType: 'mouseover',
    closeType: 'outside-click',
  });
  const { setRelativePosition, isOpen } = relativeModal;

  useEffect(() => {
    if (menuRef && menuRef.current) {
      const { top, left, right, bottom, height, width } = menuRef.current.getBoundingClientRect();
      console.log({ top, left, right, bottom, height, width });

      setRelativePosition({
        top: top + height + 10,
        left: left,
        bottom: 0,
        right: 0,
      });
    }
  }, [setRelativePosition]);

  return (
    <Fragment>
      <S.div.Row $gap={20} ref={menuRef}>
        <Link to="/community">커뮤니티</Link>
        <Link to="/drive">운전하기</Link>
      </S.div.Row>

      {isOpen && (
        <RelativeModal relativeModal={relativeModal}>
          <S.div.Card $padding={10} style={{ backgroundColor: 'white' }} ref={modalRef}>
            <S.div.Column style={{ width: '200px' }}>
              <S.button.TextButton>dasdsa</S.button.TextButton>
            </S.div.Column>
          </S.div.Card>
        </RelativeModal>
      )}
    </Fragment>
  );
};

export default HeaderMenu;
