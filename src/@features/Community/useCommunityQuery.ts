import { useMutation, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteCommunity, getCommunityDetail, getCommunityList, postCommunity, putCommunity } from './api';
import { Category, CommunityPostReq } from './type';
import { postLike } from '../Like/api';
import { deleteImage } from './ImageS3/api';

export const useCommunityWithoutId = (category: Category) => {
  const navigate = useNavigate();

  const communityListQuery = useSuspenseInfiniteQuery({
    queryKey: ['communityList', category],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getCommunityList({ category, page: pageParam, size: 10 }),

    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;

      return lastPage.page.number + 1;
    },
  });

  const mutationPost = useMutation({
    mutationKey: ['postCommunity'],
    mutationFn: (data: CommunityPostReq) => postCommunity(data),
    onSuccess: (id) => {
      navigate(`/community/${id}`);
    },
  });
  return { communityListQuery, mutationPost };
};

export const useCommunityQueryWithId = (communityId: number) => {
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

  const mutationDeleteImage = useMutation({
    mutationKey: ['deleteImage'],
    mutationFn: (url: string) => deleteImage(url),
    onSuccess: () => {
      refetch();
    },
  });

  return {
    data,
    mutationDelete,
    mutationPut,
    mutationLike,
    mutationDeleteImage,
  };
};
