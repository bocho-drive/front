import * as S from '@/styles/index.style';
import { useModal } from '../templates/Modal/useModal';
import Modal from '../templates/Modal/Modal';

interface Props {
  imgSrc?: string;
  status?: 'CLEAR' | 'CHALLENGING' | 'NOT_STARTED';
}

const ChallengeModal = (props: Props) => {
  const { imgSrc = 'https://via.placeholder.com/400x300', status = 'NOT_STARTED' } = props; // 기본값으로 JSONPlaceholder 이미지 URL 설정
  const handleClose = useModal((state) => state.handleClose);

  return (
    <Modal>
      <S.div.FixedModal>
        <S.div.Column>
          <S.button.Button onClick={handleClose} style={{ position: 'absolute', right: 0 }}>
            ❎
          </S.button.Button>
          <img src={imgSrc} />
        </S.div.Column>
        <S.div.Column $justify="center" $align="center" $gap={10} $padding={20}>
          <S.h.H1>T자 주차하기</S.h.H1>
          <S.p.P>주차 공간에 차량을 주차하세요.</S.p.P>

          <S.button.Button>도전하기</S.button.Button>
        </S.div.Column>
      </S.div.FixedModal>
    </Modal>
  );
};

export default ChallengeModal;
