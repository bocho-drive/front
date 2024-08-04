import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteCommunity, getCommunityDetail, putCommunity } from './api';
import { CommunityPostReq } from './type';
import { postLike } from '../Like/api';
import { deleteImage } from './ImageS3/api';

export const useCommunityQueryWithId = (communityId: number) => {
  const navigate = useNavigate();

  const getDetailQuery = useSuspenseQuery({
    queryKey: ['postDetail', communityId],
    queryFn: () => getCommunityDetail(communityId),
    retry: 1,
  });

  const mutationDelete = useMutation({
    mutationKey: ['deletePost', communityId],
    mutationFn: () => deleteCommunity(communityId),
    onSuccess: () => {
      navigate(-1);
    },
  });

  const mutationPut = useMutation({
    mutationKey: ['putPost', communityId],
    mutationFn: (data: CommunityPostReq) => putCommunity(communityId, data),
    onSuccess: () => {
      navigate(`/community/${communityId}`);
      getDetailQuery.refetch();
    },
  });

  const mutationLike = useMutation({
    mutationKey: ['likePost', communityId],
    mutationFn: () => postLike({ communityId }),
    onSuccess: () => {
      getDetailQuery.refetch();
    },
  });

  const mutationDeleteImage = useMutation({
    mutationKey: ['deleteImage'],
    mutationFn: (url: string) => deleteImage(url),
    onSuccess: () => {
      getDetailQuery.refetch();
    },
  });

  return {
    getDetailQuery,
    mutationDelete,
    mutationPut,
    mutationLike,
    mutationDeleteImage,
  };
};
