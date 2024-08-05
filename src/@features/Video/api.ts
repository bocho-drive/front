import { PaginationReq } from '@/config/type';
import { Video, VideoList, VideoPostReq } from './type';
import { apiWithToken, Response } from '@/config/axios';

const BASEURL = 'videos';

/** 영상 목록 조회 */
export const getVideos = async (params: PaginationReq): Promise<VideoList> => {
  const res = await apiWithToken.get<Response<VideoList>>(`${BASEURL}`, { params });

  return res.data.data;
};

/** 영상 등록 */
export const postVideo = async (req: VideoPostReq): Promise<Video> => {
  const res = await apiWithToken.post<Response<Video>>(`${BASEURL}`, req);

  return res.data.data;
};
