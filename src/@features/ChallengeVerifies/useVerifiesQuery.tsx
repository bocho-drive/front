import { useMutation, useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { ChallengeVerifiesPostReq } from './type';
import { deleteChallengeVerifies, getChallengeVerifiesDetail, getChallengeVerifiesList, putChallengeVerifies } from './api';
import { postLike } from '../Like/api';
import { nextPageParam } from '@/util/util';

const key = 'chellengeVerifies';

export const useVerifiesSuspenseInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [key],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getChallengeVerifiesList({ page: pageParam, size: 10 }),
    getNextPageParam: (lastPage) => nextPageParam(lastPage.page),
  });
};

export const useVerifiesQuery = (id: number) => {
  return useQuery({
    queryKey: [key, id],
    queryFn: () => getChallengeVerifiesDetail(id),
  });
};

export const useVerifiesDeleteMutation = () => {
  return useMutation({
    mutationFn: (id: number) => deleteChallengeVerifies(id),
  });
};

export const useVerifiesPutMutation = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: ChallengeVerifiesPostReq }) => putChallengeVerifies(id, data),
  });
};

export const useVerifiesLikeMutation = () => {
  return useMutation({
    mutationFn: (id: number) => postLike({ communityId: id }),
  });
};
