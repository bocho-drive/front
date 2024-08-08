import { useMutation, useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { ChallengeVerifiesPostReq } from './type';
import { deleteChallengeVerifies, getChallengeVerifiesDetail, getChallengeVerifiesList, postChallengeVerifies, putChallengeVerifies } from './api';
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
    mutationKey: [key, 'delete'],
    mutationFn: (id: number) => deleteChallengeVerifies(id),
  });
};

export const useVerifiesPutMutation = () => {
  return useMutation({
    mutationKey: [key, 'put'],
    mutationFn: ({ id, data }: { id: number; data: ChallengeVerifiesPostReq }) => putChallengeVerifies(id, data),
  });
};

export const useVerifiesLikeMutation = () => {
  return useMutation({
    mutationKey: [key, 'like'],
    mutationFn: (id: number) => postLike({ communityId: id }),
  });
};

export const useVerifiesPostMutation = () => {
  return useMutation({
    mutationKey: [key, 'post'],
    mutationFn: ({ challengeId, data }: { challengeId: number; data: ChallengeVerifiesPostReq }) => postChallengeVerifies(challengeId, data),
  });
};
