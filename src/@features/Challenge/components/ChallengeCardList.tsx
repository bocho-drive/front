import * as S from '@/styles/index.style';
import ChallengeCard from './ChallengeCard';
import useScroll from '@/hooks/useScroll';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getChallengeList } from '../api';

const ChallengeCardList = () => {
  const { data, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['challenges'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getChallengeList({ page: pageParam, size: 6 }),
    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;
      return lastPage.page.number + 1;
    },
  });
  useScroll({ fetchNextPage, hasNextPage, length: data.pages.length });

  return (
    <S.div.Column $gap={20}>
      {data.pages.map((page) =>
        page.content.map((challenge) => {
          return <ChallengeCard key={challenge.id} challenge={challenge} />;
        })
      )}
    </S.div.Column>
  );
};

export default ChallengeCardList;
