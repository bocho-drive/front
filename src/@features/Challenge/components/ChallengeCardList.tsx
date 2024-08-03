import * as S from '@/styles/index.style';
import ChallengeCard from './ChallengeCard';
import { useChallengeQuery } from '../useChallengeQuery';

const ChallengeCardList = () => {
  const { challengeList } = useChallengeQuery();

  return <S.div.Column $gap={20}>{challengeList.pages.map((page) => page.content.map((challenge) => <ChallengeCard key={challenge.id} challenge={challenge} />))}</S.div.Column>;
};

export default ChallengeCardList;
