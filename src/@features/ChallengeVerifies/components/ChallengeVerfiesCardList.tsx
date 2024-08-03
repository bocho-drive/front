import useScroll from '@/hooks/useScroll';
import { useChallengeQuery } from '../../Challenge/useChallengeQuery';

const ChallengeVerfiesCardList = () => {
  const { data, fetchNextPage, hasNextPage } = useChallengeQuery().challengeListQuery;
  useScroll({ fetchNextPage, hasNextPage, length: data.pages.length });
  return <div>ChallengeVerfiesCardList</div>;
};

export default ChallengeVerfiesCardList;
