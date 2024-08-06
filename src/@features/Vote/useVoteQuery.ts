import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { deleteVote, getVoteList, postVote } from './api';
import { VotePostReq } from './type';

const key = 'vote';

export const useVoteSuspenseQuery = (communityId: number) => {
  return useSuspenseQuery({
    queryKey: [key, communityId],
    queryFn: () => getVoteList(communityId),
  });
};

export const useVotePostMutation = () => {
  return useMutation({
    mutationKey: [key],
    mutationFn: (data: VotePostReq) => postVote(data),
  });
};

export const useVoteDeleteMutation = () => {
  return useMutation({
    mutationKey: [key],
    mutationFn: (id: number) => deleteVote(id),
  });
};

// export const useVoteQuery = (communityId: number) => {
//   const { data: voteList, refetch } = useSuspenseQuery({
//     queryKey: ['vote', communityId],
//     queryFn: () => getVoteList(communityId),
//   });

//   const postVoteMutation = useMutation({
//     mutationKey: ['vote'],
//     mutationFn: (data: VotePostReq) => postVote(data),
//     onSuccess: () => refetch(),
//   });

//   const deleteVoteMutation = useMutation({
//     mutationKey: ['vote'],
//     mutationFn: (id: number) => deleteVote(id),
//     onSuccess: () => refetch(),
//   });

//   return { voteList, postVoteMutation, deleteVoteMutation };
// };
