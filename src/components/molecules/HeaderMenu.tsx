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
    openType: 'mouseover',
    closeType: 'anywhere-click',
  });
  const { setRelativePosition, isOpen } = relativeModal;

  useEffect(() => {
    if (menuRef && menuRef.current) {
      const { top, left, height } = menuRef.current.getBoundingClientRect();
      // console.log({ top, left, right, bottom, height, width });

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
      <S.div.Row $gap={20}>
        <Link to="/community">커뮤니티</Link>
        <div ref={menuRef}>
          <Link to="/drive">운전하기</Link>
        </div>
      </S.div.Row>

      {isOpen && (
        <RelativeModal relativeModal={relativeModal}>
          <S.div.Card $padding={10} style={{ backgroundColor: 'white' }} ref={modalRef}>
            <S.div.Row $itemMinWidth={100}>
              <S.a.Link to="/drive">홈</S.a.Link>
              <S.a.Link to="/challenge">챌린지</S.a.Link>
              <S.a.Link to="/matching">연수 매칭</S.a.Link>
              <S.a.Link to="/tip">운전 팁</S.a.Link>
              <S.a.Link to="/video">운전 영상</S.a.Link>
            </S.div.Row>
          </S.div.Card>
        </RelativeModal>
      )}
    </Fragment>
  );
};

export default HeaderMenu;
