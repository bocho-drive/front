import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { Video, VideoPostReq } from './type';
import { postVideo } from './api';

export const useVideoInfiniteQuery = () => {
  // return useInfiniteQuery({
  //     queryKey: ['videos'],
  //     queryFn: async ({ pageParam = 0 }) => {
  //         const res = await apiWithToken.get<Response<Video[]>>(`${BASEURL}`, { params: { page: pageParam, size: 2 } });
  //         return res.data.data;
  //     },
  // })
};

export const useVideoPostMutation = () => {
  return useMutation({
    mutationKey: ['postVideo'],
    mutationFn: (data: VideoPostReq) => postVideo(data),
  });
};
