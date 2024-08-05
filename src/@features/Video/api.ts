import { PaginationReq } from '@/config/type';
import { Video, VideoDetail, VideoList, VideoPostReq } from './type';
import { apiWithToken, Response } from '@/config/axios';

const BASEURL = 'videos';

/** 영상 목록 조회 */
export const getVideos = async (params: PaginationReq): Promise<VideoList> => {
  const res = await apiWithToken.get<Response<VideoList>>(`${BASEURL}`, { params });

  return res.data.data;
};

/** 영상 상세 조회 */
export const getVideo = async (id: number): Promise<VideoDetail> => {
  const res = await apiWithToken.get<Response<VideoDetail>>(`${BASEURL}/${id}`);

  return res.data.data;
};

/** 영상 등록 */
export const postVideo = async (req: VideoPostReq): Promise<Video> => {
  const res = await apiWithToken.post<Response<VideoDetail>>(`${BASEURL}`, req);

  return res.data.data;
};

/** 영상 삭제 */
export const deleteVideo = async (id: number): Promise<void> => {
  await apiWithToken.delete<Response<void>>(`${BASEURL}/${id}`);
};
