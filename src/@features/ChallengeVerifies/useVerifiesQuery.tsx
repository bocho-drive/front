import { useMutation, useQuery } from '@tanstack/react-query';
import { ChallengeVerifiesPostReq } from './type';
import { deleteChallengeVerifies, getChallengeVerifiesDetail, putChallengeVerifies } from './api';
import { CATEGORY } from '../Community/type';
import { postLike } from '../Like/api';

export const useVerifiesQuery = (id: number) => {
  return useQuery({
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

export const useVerifiesLikeMutation = () => {
  return useMutation({
    mutationFn: (id: number) => postLike({ communityId: id }),
  });
};

// export const useVerifiesQuery = (id: number) => {
//   const verifyQuery = useQuery({
//     queryKey: [CATEGORY.CHALLENGE_VERIFY, id],
//     queryFn: () => getChallengeVerifiesDetail(id),
//   });

//   const deleteMutation = useMutation({
//     mutationKey: [CATEGORY.CHALLENGE_VERIFY, id],
//     mutationFn: () => deleteChallengeVerifies(id),
//     onSuccess: () => {
//       verifyQuery.refetch();
//     },
//   });

//   const putMutation = useMutation({
//     mutationKey: [CATEGORY.CHALLENGE_VERIFY, id],
//     mutationFn: ({ id, data }: { id: number; data: ChallengeVerifiesPostReq }) => putChallengeVerifies(id, data),
//     onSuccess: () => {
//       verifyQuery.refetch();
//     },
//   });

//   const likeMutation = useMutation({
//     mutationKey: ['likePost', id],
//     mutationFn: () => postLike({ communityId: id }),
//     onSuccess: () => {
//       verifyQuery.refetch();
//     },
//   });

//   return { verifyQuery, deleteMutation, putMutation, likeMutation };
// };
