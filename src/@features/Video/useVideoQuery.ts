import { useMutation, useQuery, useQueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { VideoPostReq } from './type';
import { deleteVideo, getVideo, getVideos, postVideo } from './api';

export const useVideoSuspenseInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['videos'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getVideos({ page: pageParam, size: 10 }),
    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;
      return lastPage.page.number + 1;
    },
  });
};

export const useVideoQuery = (id: number) => {
  return useQuery({
    queryKey: ['video', id],
    queryFn: () => getVideo(id),
  });
};

export const useVideoPostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['postVideo'],
    mutationFn: (data: VideoPostReq) => postVideo(data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['videos'] });
    },
  });
};

export const useVideoDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteVideo'],
    mutationFn: (id: number) => deleteVideo(id),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['videos'] });
    },
  });
};
