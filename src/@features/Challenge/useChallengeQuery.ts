import { useInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getChallenge, getChallengeList } from './api';

export const useChallengeSuspenseQuery = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['challenges', id],
    queryFn: () => getChallenge(id),
  });
};

export const useChallengeListSuspenseInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ['challengeList'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getChallengeList({ page: pageParam, size: 10 }),
    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;
      return lastPage.page.number + 1;
    },
  });
};

export const useChallngeListSuspenseQuery = () => {
  return useSuspenseQuery({
    queryKey: ['challengeList'],
    queryFn: () => getChallengeList({ page: 0, size: 6 }),
  });
};
