import { Pagination } from '@/config/type';
import { CommentRes } from '../Comment/type';
import { UserRole } from '../Auth/type';

export interface MyProfileRes {
  id: number;
  email: string;
  nickname: string;
  userRole: UserRole;
  createAt: Date;
}

export interface CommentListRes {
  content: CommentRes[];
  page: Pagination;
}
