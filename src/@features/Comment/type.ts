export interface CommentPostReq {
  content: string;
  communityId: number;
}

export interface CommentRes {
  id: number;
  content: string;
  createAt: string;
}
