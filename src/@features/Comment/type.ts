import { Category } from '../Community/type';

export interface CommentPostReq {
  content: string;
  communityId: number;
}

export interface CommentRes {
  id: number;
  content: string;
  createdAt: string;
  userId: number;
  author: string;
  category: Category;
  communityId: number;
}
