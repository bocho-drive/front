import { apiWithToken, Response } from '@/config/axios';
import { PaginationReq } from '@/config/type';
import { Matching, MatchingCardList, MatchingPostReq } from './type';

const BASEURL = 'drive_matchings';

/** 매칭 글 목록 조회 */
export const getMatchingList = async (params: PaginationReq): Promise<MatchingCardList> => {
  const res = apiWithToken.get<Response<MatchingCardList>>(BASEURL, { params });
  return (await res).data.data;
};

/** 매칭 글 상세 조회 */
export const getMatching = async (id: number): Promise<Matching> => {
  const res = await apiWithToken.get<Response<Matching>>(`${BASEURL}/${id}`);
  return res.data.data;
};

/** 매칭 글 등록 */
export const postMatching = async (data: MatchingPostReq): Promise<Matching> => {
  const res = await apiWithToken.post<Response<Matching>>(BASEURL, data);
  return res.data.data;
};

/** 매칭 글 수정 */
export const putMatching = async (data: MatchingPostReq, id: number): Promise<Matching> => {
  const res = await apiWithToken.put<Response<Matching>>(`${BASEURL}/${id}`, data);
  return res.data.data;
};

/** 매칭 글 삭제 */
export const deleteMatching = async (id: number): Promise<void> => {
  await apiWithToken.delete(`${BASEURL}/${id}`);
};
