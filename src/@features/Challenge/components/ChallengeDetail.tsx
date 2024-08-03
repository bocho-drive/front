import * as S from '@/styles/index.style';
import { useChallengeQuery } from '../useChallengeQuery';

interface Props {
  challengeId: number;
  children: React.ReactNode;
}

const ChallengeDetail = ({ challengeId, children }: Props) => {
  const { challengeQuery } = useChallengeQuery(challengeId);
  return (
    <S.div.Column>
      <S.h.H1>{challengeQuery.data.title}</S.h.H1>
      {children}
    </S.div.Column>
  );
};

export default ChallengeDetail;
