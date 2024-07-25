import * as S from '@/styles/index.style';
import { useModal } from '../templates/Modal/useModal';
import ChallengeModal from './ChallengeModal';

interface Props {
  imgSrc?: string;
  status?: 'CLEAR' | 'CHALLENGING' | 'NOT_STARTED';

  id: number;
}

const ChallengeCard = (props: Props) => {
  const { imgSrc = 'https://via.placeholder.com/150', status = 'NOT_STARTED', id } = props; // 기본값으로 JSONPlaceholder 이미지 URL 설정

  const handleOpen = useModal((state) => state.handleOpen);

  return (
    <S.div.Card onClick={() => handleOpen(id, 'challenge')}>
      <S.div.Row $gap={10} style={{ position: 'relative', zIndex: 1 }}>
        <img src={imgSrc} />
        {status !== 'NOT_STARTED' && (
          <S.div.Gap $height={150} $width={150} style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', rotate: '-35deg' }}>
            <S.h.H2>{status}</S.h.H2>
          </S.div.Gap>
        )}

        <S.div.Column $gap={10} $justify="space-between">
          <S.div.Column>
            <S.h.H2>챌린지 이름</S.h.H2>
            <S.p.P $maxLines={2}>챌린지 설명</S.p.P>
          </S.div.Column>
          <S.div.Column>
            <S.div.Row $gap={10} $overflow="hidden">
              <S.span.Badge $maxLines={1}>챌린지 기간</S.span.Badge>
              <S.span.Badge $maxLines={1}>챌린지 기간</S.span.Badge>
            </S.div.Row>
            <S.p.P>104명 도전완료</S.p.P>
          </S.div.Column>
        </S.div.Column>
      </S.div.Row>

      <ChallengeModal id={id} />
    </S.div.Card>
  );
};

export default ChallengeCard;
