import { apiWithToken, apiWithTokenFormData, Response } from '@/config/axios';
import { ChallengeVerifiesDetailRes, ChallengeVerifiesListRes, ChallengeVerifiesPostReq } from './type';
import { CATEGORY } from '../Community/type';
import { PaginationReq } from '@/config/type';

const BASEURL = 'challenge_verifies';

/** 챌린지 인증 목록 조회 */
export const getChallengeVerifiesList = async (params: PaginationReq): Promise<ChallengeVerifiesListRes> => {
  const res = await apiWithToken.get<Response<ChallengeVerifiesListRes>>(BASEURL, { params });
  return res.data.data;
};

/** 챌린지 인증 상세 조회 */
export const getChallengeVerifiesDetail = async (id: number): Promise<ChallengeVerifiesDetailRes> => {
  const res = await apiWithToken.get<Response<ChallengeVerifiesDetailRes>>(`${BASEURL}/${id}`);
  return res.data.data;
};

/** 챌린지 인증 글 등록 */
export const postChallengeVerifies = async (challengeId: number, data: ChallengeVerifiesPostReq): Promise<number> => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('content', data.content);
  formData.append('category', CATEGORY.CHALLENGE_VERIFY);
  data.image.forEach((img) => {
    formData.append('image', img);
  });

  const res = await apiWithTokenFormData.post<Response<number>>(BASEURL, formData, {
    params: { challengeId },
  });
  return res.data.data;
};

/** 챌린지 인증 글 수정 */
export const putChallengeVerifies = async (id: number, data: ChallengeVerifiesPostReq): Promise<number> => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('content', data.content);
  formData.append('category', CATEGORY.CHALLENGE_VERIFY);
  data.image.forEach((img) => {
    formData.append('image', img);
  });

  const res = await apiWithTokenFormData.put<Response<number>>(`${BASEURL}/${id}`, formData);
  return res.data.data;
};

/** 챌린지 인증 글 삭제 */
export const deleteChallengeVerifies = async (id: number): Promise<void> => {
  await apiWithToken.delete<Response<null>>(`${BASEURL}/${id}`);
};
