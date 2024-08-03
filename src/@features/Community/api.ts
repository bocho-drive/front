import { apiWithoutToken, apiWithToken, apiWithTokenFormData, Response } from '@/config/axios';
import { CommunityListRes, CommunityDetailRes, CommunityPostReq, CommunityListReq } from './type';
import { jsonToFormData } from '@/util/util';

const BASEURL = 'communities';

/** 게시글 목록 조회 */
const CommunityCategory = ['GENERAL', 'VOTE', 'TIP', 'CHALLENGE_CERTIFICATION'] as string[];
export const getCommunityList = async (props: CommunityListReq): Promise<CommunityListRes> => {
  let url = BASEURL;

  const searchParams = new URLSearchParams();
  if (props.category && CommunityCategory.includes(props.category)) searchParams.append('category', props.category);
  if (props.page !== undefined) searchParams.append('page', String(props.page));
  if (props.size) searchParams.append('size', String(props.size));

  url = `${BASEURL}?${searchParams.toString()}`;

  const res = await apiWithoutToken.get<Response<CommunityListRes>>(url);

  return res.data.data;
};

/** 게시글 상세조회 */
export const getCommunityDetail = async (id: number): Promise<CommunityDetailRes> => {
  const url = `${BASEURL}/${id}`;

  const res = await apiWithoutToken.get<Response<CommunityDetailRes>>(url);

  return res.data.data;
};

/** 게시글 작성 */
export const postCommunity = async (data: CommunityPostReq): Promise<number> => {
  const res = await apiWithTokenFormData.post<Response<number>>(BASEURL, jsonToFormData(data));
  return res.data.data;
};

/** 게시글 삭제 */
export const deleteCommunity = async (id: number): Promise<void> => {
  await apiWithToken.delete<Response<null>>(`${BASEURL}/${id}`);
};

/** 게시글 수정 */
export const putCommunity = async (id: number, data: CommunityPostReq): Promise<number> => {
  const res = await apiWithTokenFormData.put<Response<number>>(`${BASEURL}/${id}`, jsonToFormData(data));
  return res.data.data;
};
