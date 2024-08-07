import { Response, apiWithoutToken } from '@/config/axios';
import { Challenge, ChallengeList } from './type';
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
