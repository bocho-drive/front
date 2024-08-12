import { useMutation, useQuery, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { deleteCommunity, getCommunityDetail, getCommunityList, putCommunity } from './api';
import { Category, CommunityPostReq } from './type';
import { deleteImage } from './ImageS3/api';

export const useCommunityListSuspenseInfiniteQuery = (category: Category) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['infinite', 'communityList', category],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getCommunityList({ category, page: pageParam, size: 10 }),

    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;

      return lastPage.page.number + 1;
    },
  });
};

export const useCommunityListSuspenseQuery = (category: Category, size: number) => {
  return useSuspenseQuery({
    queryKey: ['communityList', category],
    queryFn: () => getCommunityList({ category, page: 0, size }),
  });
};

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

export const useCommunityDeleteImageMutation = () => {
  return useMutation({
    mutationKey: ['deleteImage'],
    mutationFn: (url: string) => deleteImage(url),
  });
};
