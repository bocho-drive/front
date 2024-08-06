import { PaginationReq } from '@/config/type';
import { CommunityListRes } from '../Community/type';
import { apiWithToken, Response } from '@/config/axios';
import { CommentListRes } from './type';
import { ChallengeVerifiesListRes } from '../ChallengeVerifies/type';

const BASEURL = 'my';

/** 내 게시글 목록 조회 */
export const getMyCommunityList = async (userId: number, params: PaginationReq): Promise<CommunityListRes> => {
  const res = await apiWithToken.get<Response<CommunityListRes>>(`${BASEURL}/${userId}/posts`, { params });
  return res.data.data;
};

/** 내 댓글 목록 조회 */
export const getMyCommentList = async (userId: number, params: PaginationReq): Promise<CommentListRes> => {
  const res = await apiWithToken.get<Response<CommentListRes>>(`${BASEURL}/${userId}/comments`, { params });
  return res.data.data;
};

/** 내 챌린지인증 목록 조회 */
export const getMyChallengeVerifyList = async (userId: number, params: PaginationReq): Promise<ChallengeVerifiesListRes> => {
  const res = await apiWithToken.get<Response<ChallengeVerifiesListRes>>(`${BASEURL}/${userId}/challenges`, { params });
  return res.data.data;
};
