import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { ChallengeVerifiesPostReq, VerifyCategory } from './type';
import { deleteChallengeVerifies, getChallengeVerifiesDetail, putChallengeVerifies } from './api';

export const useVerifiesQuery = (id: number) => {
  const verifySuspenseQuery = useSuspenseQuery({
    queryKey: [VerifyCategory, id],
    queryFn: () => getChallengeVerifiesDetail(id),
  });

  const deleteMutation = useMutation({
    mutationKey: [VerifyCategory, id],
    mutationFn: () => deleteChallengeVerifies(id),
    onSuccess: () => {
      verifySuspenseQuery.refetch();
    },
  });

  const putMutation = useMutation({
    mutationKey: [VerifyCategory, id],
    mutationFn: ({ id, data }: { id: number; data: ChallengeVerifiesPostReq }) => putChallengeVerifies(id, data),
    onSuccess: () => {
      verifySuspenseQuery.refetch();
    },
  });

  return { verifySuspenseQuery, deleteMutation, putMutation };
};
