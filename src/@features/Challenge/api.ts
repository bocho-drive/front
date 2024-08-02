import { Response, apiWithoutToken } from '@/config/axios';
import { Challenge, ChallengeList } from './type';
import { PaginationReq } from '@/config/type';

const BASEURL = 'challenges';

/** 챌린지 목록 조회 */
export const getChallengeList = async (props: PaginationReq): Promise<ChallengeList> => {
  let url = BASEURL;

  const searchParams = new URLSearchParams();
  if (props.page) searchParams.append('page', String(props.page));
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
