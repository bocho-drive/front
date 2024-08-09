import { apiWithoutToken, apiWithToken, formDataHeader, Response } from '@/config/axios';
import { CommunityListRes, CommunityDetailRes, CommunityPostReq, CommunityListReq } from './type';

const BASEURL = 'communities';

/** 게시글 목록 조회 */
export const getCommunityList = async (params: CommunityListReq): Promise<CommunityListRes> => {
  const res = await apiWithoutToken.get<Response<CommunityListRes>>(BASEURL, { params });
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
  const res = await apiWithToken.post<Response<number>>(BASEURL, postJsonToFormData(data), {
    headers: formDataHeader,
  });
  return res.data.data;
};

/** 게시글 삭제 */
export const deleteCommunity = async (id: number): Promise<void> => {
  await apiWithToken.delete<Response<null>>(`${BASEURL}/${id}`);
};

/** 게시글 수정 */
export const putCommunity = async (id: number, data: CommunityPostReq): Promise<number> => {
  const res = await apiWithToken.put<Response<number>>(`${BASEURL}/${id}`, postJsonToFormData(data), {
    headers: formDataHeader,
  });
  return res.data.data;
};

const postJsonToFormData = (json: CommunityPostReq): FormData => {
  const formData = new FormData();
  formData.append('title', json.title);
  formData.append('content', json.content);
  formData.append('category', json.category);
  json.image.forEach((img) => {
    formData.append('image', img);
  });
  return formData;
};
