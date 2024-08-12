import { apiWithToken, Response } from '@/config/axios';

const BASEURL = 'like';

interface LikeReq {
  communityId: number;
}

export const postLike = async (data: LikeReq): Promise<void> => {
  await apiWithToken.post<Response<null>>(BASEURL, data);
};

export const deleteLike = async (data: LikeReq): Promise<void> => {
  await apiWithToken.delete<Response<null>>(BASEURL, { data });
};

export const getLike = async (data: LikeReq): Promise<boolean> => {
  const res = await apiWithToken.get<Response<boolean>>(BASEURL, { params: data });
  return res.data.data;
};
