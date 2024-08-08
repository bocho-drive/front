import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { deleteMatchingApply, getMatchingApplyList, postMatchingApply } from './api';

const key = 'matchingApplyList';

export const useMatchingApplySuspenseQuery = (matchingId: number) => {
  return useSuspenseQuery({
    queryKey: [key, matchingId],
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
        queryKey: [key, matchingId],
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
        queryKey: [key],
      });
    },
  });
};
