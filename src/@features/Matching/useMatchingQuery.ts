import { useMutation, useQuery, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { deleteMatching, getMatching, getMatchingList, postMatching, putMatching } from './api';
import { MatchingPostReq } from './type';

const baseKey = 'matching';

export const useMatchingSuspenseInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['infinite', baseKey],
    queryFn: ({ pageParam = 0 }) => getMatchingList({ page: pageParam, size: 10 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;
      return lastPage.page.number + 1;
    },
  });
};

export const useMatchingSuspenseQuery = () => {
  return useSuspenseQuery({
    queryKey: [baseKey],
    queryFn: () => getMatchingList({ page: 0, size: 6 }),
  });
};

export const useMatchingQuery = (id: number) => {
  return useQuery({
    queryKey: [baseKey, id],
    queryFn: () => getMatching(id),
  });
};

export const useMatchingPostMutation = () => {
  return useMutation({
    mutationKey: [baseKey],
    mutationFn: (data: MatchingPostReq) => postMatching(data),
  });
};

export const useMatchingPutMutation = () => {
  return useMutation({
    mutationKey: [baseKey],
    mutationFn: ({ data, id }: { data: MatchingPostReq; id: number }) => putMatching(data, id),
  });
};

export const useMatchingDeleteMutation = () => {
  return useMutation({
    mutationKey: [baseKey],
    mutationFn: (id: number) => deleteMatching(id),
  });
};
