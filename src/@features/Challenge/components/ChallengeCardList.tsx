import * as S from '@/styles/index.style';
import ChallengeCard from './ChallengeCard';
import { useChallengeQuery } from '../useChallengeQuery';
import useScroll from '@/hooks/useScroll';

const ChallengeCardList = () => {
  const { data, fetchNextPage, hasNextPage } = useChallengeQuery().challengeListQuery;
  useScroll({ fetchNextPage, hasNextPage, length: data.pages.length });

  return <S.div.Column $gap={20}>{data.pages.map((page) => page.content.map((challenge) => <ChallengeCard key={challenge.id} challenge={challenge} />))}</S.div.Column>;
};

export default ChallengeCardList;
