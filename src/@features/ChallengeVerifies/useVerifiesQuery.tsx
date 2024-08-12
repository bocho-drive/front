import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { ChallengeVerifiesPostReq } from './type';
import { deleteChallengeVerifies, getChallengeVerifiesDetail, putChallengeVerifies } from './api';
import { CATEGORY } from '../Community/type';

export const useVerifiesQuery = (id: number) => {
  return useQuery({
    queryKey: [CATEGORY.CHALLENGE_VERIFY, id],
    queryFn: () => getChallengeVerifiesDetail(id),
  });
};

export const useVerifiesSuspenseQuery = (id: number) => {
  return useSuspenseQuery({
    queryKey: [CATEGORY.CHALLENGE_VERIFY, id],
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
