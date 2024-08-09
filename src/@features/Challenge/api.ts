import { Response, apiWithAdmin, apiWithoutToken } from '@/config/axios';
import { Challenge, ChallengeList, ChallengePostReq } from './type';
import { PaginationReq } from '@/config/type';

const BASEURL = 'challenges';

/** 챌린지 목록 조회 */
export const getChallengeList = async (params: PaginationReq): Promise<ChallengeList> => {
  const res = await apiWithoutToken.get<Response<ChallengeList>>(BASEURL, { params });
  return res.data.data;
};

/** 챌린지 상세 조회 */
export const getChallenge = async (id: number): Promise<Challenge> => {
  const res = await apiWithoutToken.get<Response<Challenge>>(`${BASEURL}/${id}`);
  return res.data.data;
};

/** 챌린지 작성 */
export const postChallenge = async (req: ChallengePostReq): Promise<void> => {
  await apiWithAdmin.post(BASEURL, req);
};

/** 챌린지 수정 */
export const putChallenge = async (id: number, req: ChallengePostReq): Promise<void> => {
  await apiWithAdmin.put(`${BASEURL}/${id}`, req);
};

/** 챌린지 삭제 */
export const deleteChallenge = async (id: number): Promise<void> => {
  await apiWithAdmin.delete(`${BASEURL}/${id}`);
};
