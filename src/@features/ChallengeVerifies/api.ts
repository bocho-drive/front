import { apiWithToken, apiWithTokenFormData, Response } from '@/config/axios';
import { ChallengeVerifiesDetailRes, ChallengeVerifiesListReq, ChallengeVerifiesListRes, ChallengeVerifiesPostReq, VerifyCategory as verifyCategory } from './type';

const BASEURL = 'challenge_verifies';

/** 챌린지 인증 목록 조회 */
export const getChallengeVerifiesList = async (props: ChallengeVerifiesListReq): Promise<ChallengeVerifiesListRes> => {
  const searchParams = new URLSearchParams();
  if (props.page !== undefined) searchParams.append('page', String(props.page));
  if (props.size) searchParams.append('size', String(props.size));
  const res = await apiWithToken.get<Response<ChallengeVerifiesListRes>>(BASEURL);
  return res.data.data;
};

/** 챌린지 인증 상세 조회 */
export const getChallengeVerifiesDetail = async (id: number): Promise<ChallengeVerifiesDetailRes> => {
  const res = await apiWithToken.get<Response<ChallengeVerifiesDetailRes>>(`${BASEURL}/${id}`);
  return res.data.data;
};

/** 챌린지 인증 글 등록 */
export const postChallengeVerifies = async (challengeId: number, data: ChallengeVerifiesPostReq): Promise<number> => {
  const url = `${BASEURL}?challengeId=${challengeId}`;

  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('content', data.content);
  data.image.forEach((img) => {
    formData.append('image', img);
  });

  const res = await apiWithTokenFormData.post<Response<number>>(url, formData);
  return res.data.data;
};

/** 챌린지 인증 글 수정 */
export const putChallengeVerifies = async (id: number, data: ChallengeVerifiesPostReq): Promise<number> => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('content', data.content);
  formData.append('category', verifyCategory);
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
