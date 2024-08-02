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
      if (lastPage.last) return undefined;
      return lastPage.number + 1;
    },
  });

  return {
    challengeList,
    fetchNextPage,
    hasNextPage,
    isLoading,
  };
};
