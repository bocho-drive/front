import * as S from '@/styles/index.style';
import ChallengeCard from './ChallengeCard';
import { useChallengeQuery } from '../useChallengeQuery';
import useScroll from '@/hooks/useScroll';

const ChallengeCardList = () => {
  const { challengeList, fetchNextPage, hasNextPage } = useChallengeQuery();
  useScroll({ fetchNextPage, hasNextPage, length: challengeList.pages.length });

  return <S.div.Column $gap={20}>{challengeList.pages.map((page) => page.content.map((challenge) => <ChallengeCard key={challenge.id} challenge={challenge} />))}</S.div.Column>;
};

export default ChallengeCardList;
