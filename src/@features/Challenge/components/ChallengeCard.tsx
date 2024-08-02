import * as S from '@/styles/index.style';
import ChallengeModal from '../../../components/molecules/ChallengeModal';
import { useModal } from '../../../components/templates/Modal/useModal';
import { Challenge } from '../type';

interface Props {
  challenge: Challenge;
}

const ChallengeCard = ({ challenge }: Props) => {
  const handleOpen = useModal((state) => state.handleOpen);

  return (
    <S.div.Card onClick={() => handleOpen(Number(challenge.id), 'challenge')}>
      <S.div.Row $gap={10} style={{ position: 'relative', zIndex: 1 }}>
        <S.div.Column $gap={10} $justify="space-between">
          <S.div.Column>
            <S.h.H2>{challenge.title}</S.h.H2>
            <S.p.P $maxLines={2}>{challenge.content}</S.p.P>
          </S.div.Column>
        </S.div.Column>
      </S.div.Row>

      <ChallengeModal challenge={challenge} />
    </S.div.Card>
  );
};

export default ChallengeCard;
