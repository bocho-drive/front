import { apiWithToken, Response } from '@/config/axios';
import { Vote, VotePostReq } from './type';

const BASEURL = '/votes';

/** 투표 목록 조회 */
export const getVoteList = async (id: number): Promise<Vote[]> => {
  let url = BASEURL;

  const searchParams = new URLSearchParams();
  searchParams.append('communityId', id.toString());

  url = `${BASEURL}?${searchParams.toString()}`;

  const res = await apiWithToken.get<Response<Vote[]>>(url);

  return res.data.data;
};

/** 투표하기 */
export const postVote = async (req: VotePostReq): Promise<void> => {
  await apiWithToken.post<Response<null>>(BASEURL, req);
};

/** 투표 취소 */
export const deleteVote = async (id: number): Promise<void> => {
  await apiWithToken.delete<Response<null>>(`${BASEURL}/${id}`);
};
