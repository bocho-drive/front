import * as S from '@/styles/index.style';
import Modal from '../templates/Modal/Modal';
import { useModal } from '../templates/Modal/useModal';

interface Props {
  imgSrc?: string;
  status?: 'CLEAR' | 'CHALLENGING' | 'NOT_STARTED';
  id: number;
}

const ChallengeModal = (props: Props) => {
  const { id, imgSrc = 'https://via.placeholder.com/400x300', status = 'NOT_STARTED' } = props; // 기본값으로 JSONPlaceholder 이미지 URL 설정
  //! useModal hook으로 효율적으로 관리하는 방법 알아보기
  // 지금같은 경우는 useModal하나로 관리되고 있기 때문에, 관련없는 modal또한 계산되고 있음
  // console.log("render ChallengeModal");
  const { isShow } = useModal((state) => state);

  if (!isShow(id, 'challenge')) return null;
  return (
    <Modal>
      <S.div.FixedModal>
        <S.div.Card>
          <img src={imgSrc} />
          <S.div.Column $justify="center" $align="center" $gap={10}>
            <S.div.Gap $height={10} />
            <S.h.H1>T자 주차하기</S.h.H1>
            <S.p.P>주차 공간에 차량을 주차하세요.</S.p.P>

            {status === 'NOT_STARTED' && <S.button.Button>도전하기</S.button.Button>}
            {status === 'CHALLENGING' && <S.button.Button>인증하기</S.button.Button>}
            {status === 'CLEAR' && <S.button.Button>내 인증글 보기</S.button.Button>}
          </S.div.Column>
        </S.div.Card>
      </S.div.FixedModal>
    </Modal>
  );
};

export default ChallengeModal;
