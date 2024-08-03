import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { ChallengeVerifiesPostReq } from './type';
import { deleteChallengeVerifies, getChallengeVerifiesDetail, putChallengeVerifies } from './api';
import { CATEGORY } from '../Community/type';
import { postLike } from '../Like/api';

export const useVerifiesQuery = (id: number) => {
  const verifySuspenseQuery = useSuspenseQuery({
    queryKey: [CATEGORY.CHALLENGE_VERIFY, id],
    queryFn: () => getChallengeVerifiesDetail(id),
  });

  const deleteMutation = useMutation({
    mutationKey: [CATEGORY.CHALLENGE_VERIFY, id],
    mutationFn: () => deleteChallengeVerifies(id),
    onSuccess: () => {
      verifySuspenseQuery.refetch();
    },
  });

  const putMutation = useMutation({
    mutationKey: [CATEGORY.CHALLENGE_VERIFY, id],
    mutationFn: ({ id, data }: { id: number; data: ChallengeVerifiesPostReq }) => putChallengeVerifies(id, data),
    onSuccess: () => {
      verifySuspenseQuery.refetch();
    },
  });

  const mutationLike = useMutation({
    mutationKey: ['likePost', id],
    mutationFn: () => postLike({ communityId: id }),
    onSuccess: () => {
      verifySuspenseQuery.refetch();
    },
  });

  return { verifySuspenseQuery, deleteMutation, putMutation, mutationLike };
};
