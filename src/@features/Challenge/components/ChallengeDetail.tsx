import * as S from '@/styles/index.style';
import { useChallengeQuery } from '../useChallengeQuery';

interface Props {
  challengeId: number;
  children: React.ReactNode;
}

const ChallengeDetail = ({ challengeId, children }: Props) => {
  const { challengeQuery } = useChallengeQuery(challengeId);
  return (
    <S.div.Column $gap={20}>
      <S.div.Card>
        <S.h.H2>🏆 {challengeQuery.data?.title}</S.h.H2>
      </S.div.Card>
      {children}
    </S.div.Column>
  );
};

export default ChallengeDetail;
