import { Response, apiWithToken, apiWithoutToken } from '@/config/axios';
import { CommentPostReq, CommentRes } from './type';

const BASEURL = 'comments';

/** 댓글 목록조회 */
export const getCommentList = async (communityId?: number): Promise<CommentRes[]> => {
  const res = await apiWithoutToken.get<Response<CommentRes[]>>(BASEURL, { params: { communityId } });
  return res.data.data;
};

/** 댓글 작성 */
export const postComment = async (data: CommentPostReq): Promise<CommentRes> => {
  const res = await apiWithToken.post<Response<CommentRes>>(BASEURL, data);
  return res.data.data;
};

/** 댓글 수정 */
export const putComment = async (id: number, data: CommentPostReq): Promise<void> => {
  await apiWithToken.put<Response<null>>(`${BASEURL}/${id}`, data);
};

/** 댓글 삭제 */
export const deleteComment = async (id: number): Promise<void> => {
  await apiWithToken.delete<Response<null>>(`${BASEURL}/${id}`);
};
