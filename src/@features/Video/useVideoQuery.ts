import { useMutation, useQuery, useQueryClient, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { VideoPostReq } from './type';
import { deleteVideo, getVideo, getVideos, postVideo } from './api';

const key = 'videos';

/** 비디오 목록 조회 */
export const useVideoListSuspenseInfiniteQuery = () => {
  return useSuspenseInfiniteQuery({
    queryKey: [key, 'infinite'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getVideos({ page: pageParam, size: 10 }),
    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;
      return lastPage.page.number + 1;
    },
  });
};

/** 비디오 목록 조회 */
export const useVideoListSuspenseQuery = () => {
  return useSuspenseQuery({
    queryKey: [key],
    queryFn: () => getVideos({ page: 0, size: 6 }),
  });
};

/** 비디오 상세 조회 */
export const useVideoQuery = (id: number) => {
  return useQuery({
    queryKey: ['video', id],
    queryFn: () => getVideo(id),
  });
};

/** 비디오 등록 */
export const useVideoPostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['postVideo'],
    mutationFn: (data: VideoPostReq) => postVideo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};

/** 비디오 삭제 */
export const useVideoDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteVideo'],
    mutationFn: (id: number) => deleteVideo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
    },
  });
};
