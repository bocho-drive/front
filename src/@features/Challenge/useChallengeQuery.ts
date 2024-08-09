import { useQuery, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getChallenge, getChallengeList } from './api';

const staleTime = 1000 * 60; // 1분

export const useChallengeQuery = (id: number, enabled: boolean) => {
  return useQuery({
    queryKey: ['challenge', id],
    queryFn: () => getChallenge(id),
    staleTime,
    enabled,
  });
};

export const useChallengeSuspenseQuery = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['challenge', id],
    queryFn: () => getChallenge(id),
    staleTime,
  });
};

export const useChallengeListSuspenseInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['infinite', 'challengeList'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getChallengeList({ page: pageParam, size: 10 }),
    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;
      return lastPage.page.number + 1;
    },
    staleTime,
  });
};

export const useChallengeListSuspenseQuery = () => {
  return useSuspenseQuery({
    queryKey: ['challengeList'],
    queryFn: () => getChallengeList({ page: 0, size: 6 }),
    staleTime,
  });
};
