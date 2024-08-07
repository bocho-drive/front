import { useMutation, useQuery, useQueryClient, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { VideoPostReq } from './type';
import { deleteVideo, getVideo, getVideos, postVideo } from './api';
import { nextPageParam } from '@/util/util';

const key = 'videos';

export const useVideoListSuspenseInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['infinite', key],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getVideos({ page: pageParam, size: 10 }),
    getNextPageParam: (lastPage) => nextPageParam(lastPage.page),
  });
};

export const useVideoListSuspenseQuery = () => {
  return useSuspenseQuery({
    queryKey: [key],
    queryFn: () => getVideos({ page: 0, size: 6 }),
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
      queryClient.refetchQueries({ queryKey: [key] });
    },
  });
};

export const useVideoDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteVideo'],
    mutationFn: (id: number) => deleteVideo(id),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [key] });
    },
  });
};
