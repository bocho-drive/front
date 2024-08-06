import { PaginationReq } from '@/config/type';
import { CommunityListRes } from '../Community/type';
import { apiWithoutToken, Response } from '@/config/axios';
import { CommentListRes } from './type';
import { ChallengeList } from '../Challenge/type';

const BASEURL = 'my';

/** 내 게시글 목록 조회 */
export const getMyCommunityList = async (userId: number, params: PaginationReq): Promise<CommunityListRes> => {
  const res = await apiWithoutToken.get<Response<CommunityListRes>>(`${BASEURL}/${userId}/posts`, { params });
  return res.data.data;
};

/** 내 댓글 목록 조회 */
export const getMyCommentList = async (userId: number, params: PaginationReq): Promise<CommentListRes> => {
  const res = await apiWithoutToken.get<Response<CommentListRes>>(`${BASEURL}/${userId}/comments`, { params });
  return res.data.data;
};

/** 내 챌린지 목록 조회 */
export const getMyChallengeList = async (userId: number, params: PaginationReq): Promise<ChallengeList> => {
  const res = await apiWithoutToken.get<Response<ChallengeList>>(`${BASEURL}/${userId}/challenges`, { params });
  return res.data.data;
};
