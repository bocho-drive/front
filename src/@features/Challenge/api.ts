import { Response, apiWithAdmin, apiWithoutToken } from '@/config/axios';
import { Challenge, ChallengeList, ChallengePostReq } from './type';
import { PaginationReq } from '@/config/type';
import { isNumber } from 'lodash';

const BASEURL = 'challenges';

/** 챌린지 목록 조회 */
export const getChallengeList = async (props: PaginationReq): Promise<ChallengeList> => {
  let url = BASEURL;

  const searchParams = new URLSearchParams();
  if (isNumber(props.page)) searchParams.append('page', String(props.page));
  if (props.size) searchParams.append('size', String(props.size));
  url = `${BASEURL}?${searchParams.toString()}`;

  const res = await apiWithoutToken.get<Response<ChallengeList>>(url);

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
