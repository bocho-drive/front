import { PaginationReq } from '@/config/type';
import { CommunityListRes } from '../Community/type';
import { apiWithToken, Response } from '@/config/axios';
import { CommentListRes, MyProfileRes } from './type';
import { ChallengeVerifiesListRes } from '../ChallengeVerifies/type';

const BASEURL = 'my';

/** 내 정보 조회 */
export const getMyProfile = async (): Promise<MyProfileRes> => {
  const res = await apiWithToken.get<Response<MyProfileRes>>(`${BASEURL}/profile`);
  return res.data.data;
};

/** 내 게시글 목록 조회 */
export const getMyCommunityList = async (params: PaginationReq): Promise<CommunityListRes> => {
  const res = await apiWithToken.get<Response<CommunityListRes>>(`${BASEURL}/posts`, { params });
  return res.data.data;
};

/** 내 댓글 목록 조회 */
export const getMyCommentList = async (params: PaginationReq): Promise<CommentListRes> => {
  const res = await apiWithToken.get<Response<CommentListRes>>(`${BASEURL}/comments`, { params });
  return res.data.data;
};

/** 내 챌린지인증 목록 조회 */
export const getMyChallengeVerifyList = async (params: PaginationReq): Promise<ChallengeVerifiesListRes> => {
  const res = await apiWithToken.get<Response<ChallengeVerifiesListRes>>(`${BASEURL}/challenges`, { params });
  return res.data.data;
};
