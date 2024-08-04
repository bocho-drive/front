import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { deleteCommunity, getCommunityDetail, putCommunity } from './api';
import { CommunityPostReq } from './type';
import { postLike } from '../Like/api';
import { deleteImage } from './ImageS3/api';

export const useCommunityQuery = (id: number) => {
  return useQuery({
    queryKey: ['community', id],
    queryFn: () => getCommunityDetail(id),
  });
};

export const useCommunitySuspenseQuery = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['community', id],
    queryFn: () => getCommunityDetail(id),
  });
};

export const useCommunityPutMutation = (id: number) => {
  return useMutation({
    mutationKey: ['putCommunity', id],
    mutationFn: (data: CommunityPostReq) => putCommunity(id, data),
  });
};

export const useCommunityDeleteMutation = (id: number) => {
  return useMutation({
    mutationKey: ['deleteCommunity', id],
    mutationFn: () => deleteCommunity(id),
  });
};

export const useCommunityLikeMutation = (id: number) => {
  return useMutation({
    mutationKey: ['likeCommunity', id],
    mutationFn: () => postLike({ communityId: id }),
  });
};

export const useCommunityDeleteImageMutation = () => {
  return useMutation({
    mutationKey: ['deleteImage'],
    mutationFn: (url: string) => deleteImage(url),
  });
};

// export const useCommunityQueryWithId = (communityId: number) => {
//   const navigate = useNavigate();

//   const getDetailSuspenseQuery = useSuspenseQuery({
//     queryKey: ['postDetail', communityId],
//     queryFn: () => getCommunityDetail(communityId),
//     retry: 1,
//   });

//   const mutationDelete = useMutation({
//     mutationKey: ['deletePost', communityId],
//     mutationFn: () => deleteCommunity(communityId),
//     onSuccess: () => {
//       navigate(-1);
//     },
//   });

//   const mutationPut = useMutation({
//     mutationKey: ['putPost', communityId],
//     mutationFn: (data: CommunityPostReq) => putCommunity(communityId, data),
//     onSuccess: () => {
//       navigate(`/community/${communityId}`);
//       // getDetailSuspenseQuery.refetch();
//     },
//   });

//   const mutationLike = useMutation({
//     mutationKey: ['likePost', communityId],
//     mutationFn: () => postLike({ communityId }),
//     onSuccess: () => {
//       getDetailSuspenseQuery.refetch();
//     },
//   });

//   const mutationDeleteImage = useMutation({
//     mutationKey: ['deleteImage'],
//     mutationFn: (url: string) => deleteImage(url),
//     onSuccess: () => {
//       getDetailSuspenseQuery.refetch();
//     },
//   });

//   return {
//     getDetailSuspenseQuery,
//     mutationDelete,
//     mutationPut,
//     mutationLike,
//     mutationDeleteImage,
//   };
// };
