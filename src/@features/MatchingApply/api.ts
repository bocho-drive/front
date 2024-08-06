import { apiWithToken, Response } from '@/config/axios';
import { MatchingApply } from './type';

const BASEURL = 'drive_matchings_applys';

/** 매칭 신청 */
export const postMatchingApply = async (matchingId: number): Promise<number> => {
  await apiWithToken.post<Response<null>>(BASEURL + `/${matchingId}`);

  return matchingId;
};

/** 매칭 신청 취소 */
export const deleteMatchingApply = async (applyId: number): Promise<void> => {
  await apiWithToken.delete<Response<null>>(BASEURL + `/${applyId}`);
};

/** 매칭신청 목록 조회 */
export const getMatchingApplyList = async (matchingId: number): Promise<MatchingApply[]> => {
  const res = await apiWithToken.get<Response<MatchingApply[]>>(BASEURL, {
    params: {
      drive_matching_id: matchingId,
    },
  });
  return res.data.data;
};
