import * as S from '@/styles/index.style';
import { useModal } from '../templates/Modal/useModal';

interface Props {
  imgSrc?: string;
  status?: 'CLEAR' | 'CHALLENGING' | 'NOT_STARTED';
}

const ChallengeCard = (props: Props) => {
  const { imgSrc = 'https://via.placeholder.com/150', status = 'NOT_STARTED' } = props; // 기본값으로 JSONPlaceholder 이미지 URL 설정
  const handleOpen = useModal((state) => state.handleOpen);

  return (
    <S.div.Card onClick={handleOpen}>
      <S.div.Row $gap={10}>
        <img src={imgSrc} />
        {status !== 'NOT_STARTED' && (
          <S.div.Gap $height={150} $width={150} style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', rotate: '-35deg' }}>
            <S.h.H2>{status}</S.h.H2>
          </S.div.Gap>
        )}

        <S.div.Column $gap={10}>
          <S.h.H2>챌린지 이름</S.h.H2>
          <S.p.P>챌린지 설명</S.p.P>
          <S.div.Row $gap={10}>
            <S.span.Badge>챌린지 기간</S.span.Badge>
            <S.span.Badge>챌린지 기간</S.span.Badge>
          </S.div.Row>
          <span>104명 도전완료</span>
        </S.div.Column>
      </S.div.Row>
    </S.div.Card>
  );
};

export default ChallengeCard;
