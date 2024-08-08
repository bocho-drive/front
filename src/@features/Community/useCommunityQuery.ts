import { useMutation, useQuery, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { deleteCommunity, getCommunityDetail, getCommunityList, postCommunity, putCommunity } from './api';
import { Category, CommunityPostReq } from './type';
import { postLike } from '../Like/api';
import { deleteImage } from './ImageS3/api';
import { nextPageParam } from '@/util/util';

const keyList = 'communityList';
const key = 'community';

export const useCommunityListSuspenseInfiniteQuery = (category: Category) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['infinite', keyList, category],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getCommunityList({ category, page: pageParam, size: 10 }),
    getNextPageParam: (lastPage) => nextPageParam(lastPage.page),
  });
};

export const useCommunityListSuspenseQuery = (category: Category, size: number) => {
  return useSuspenseQuery({
    queryKey: [keyList, category],
    queryFn: () => getCommunityList({ category, page: 0, size }),
  });
};

export const useCommunityQuery = (id: number) => {
  return useQuery({
    queryKey: [key, id],
    queryFn: () => getCommunityDetail(id),
  });
};

export const useCommunitySuspenseQuery = (id: number) => {
  return useSuspenseQuery({
    queryKey: [key, id],
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

export const useCommunityPostMutation = () => {
  return useMutation({
    mutationKey: ['postCommunity'],
    mutationFn: (data: CommunityPostReq) => postCommunity(data),
  });
};
