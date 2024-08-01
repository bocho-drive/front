import { apiWithToken, Response } from '@/config/axios';
import { VotePostReq } from './type';

const BASEURL = '/votes';

export const postVote = async (req: VotePostReq): Promise<void> => {
  await apiWithToken.post<Response<null>>(BASEURL, req);
};

export const deleteVote = async (id: number): Promise<void> => {
  await apiWithToken.delete<Response<null>>(`${BASEURL}/${id}`);
};
