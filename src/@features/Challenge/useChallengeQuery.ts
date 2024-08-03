import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getChallengeList } from './api';

export const useChallengeQuery = () => {
  const {
    data: challengeList,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useSuspenseInfiniteQuery({
    queryKey: ['challenges'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getChallengeList({ page: pageParam, size: 6 }),
    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;
      return lastPage.page.number + 1;
    },
  });

  return {
    challengeList,
    fetchNextPage,
    hasNextPage,
    isLoading,
  };
};
