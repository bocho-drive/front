import { apiWithToken, Response } from '@/config/axios';

const BASEURL = 'like';

interface LikeReq {
  communityId: number;
}

export const postLike = async (data: LikeReq): Promise<void> => {
  await apiWithToken.post<Response<null>>(BASEURL, data);
};
