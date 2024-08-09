import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { deleteMatchingApply, getMatchingApplyList, postMatchingApply } from './api';

export const useMatchingApplySuspenseQuery = (matchingId: number) => {
  return useSuspenseQuery({
    queryKey: ['matchingApplyList', matchingId],
    queryFn: () => getMatchingApplyList(matchingId),
  });
};

export const useMatchingApplyPostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['postMatchingApply'],
    mutationFn: (matchingId: number) => postMatchingApply(matchingId),
    onSuccess: (matchingId: number) => {
      queryClient.refetchQueries({
        queryKey: ['matchingApplyList', matchingId],
      });
    },
  });
};

export const useMatchingApplyDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteMatchingApply'],
    mutationFn: (applyId: number) => deleteMatchingApply(applyId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['matchingApplyList'],
      });
    },
  });
};
