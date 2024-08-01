import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteCommunity, getCommunityDetail, postCommunity, putCommunity } from './api';
import { CommunityPostReq } from './type';
import { postLike } from '../Like/api';

export const useCommunityPost = () => {
  const navigate = useNavigate();

  const mutationPost = useMutation({
    mutationKey: ['postCommunity'],
    mutationFn: (data: CommunityPostReq) => postCommunity(data),
    onSuccess: (id) => {
      navigate(`/community/${id}`);
    },
  });
  return { mutationPost };
};

export const useCommunityQuery = (communityId: number) => {
  const navigate = useNavigate();

  const { data, refetch } = useSuspenseQuery({
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
      refetch();
    },
  });

  const mutationLike = useMutation({
    mutationKey: ['likePost', communityId],
    mutationFn: () => postLike({ communityId }),
    onSuccess: () => {
      refetch();
    },
  });

  return {
    data,
    mutationDelete,
    mutationPut,
    mutationLike,
  };
};
