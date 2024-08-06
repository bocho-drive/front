import { Pagination } from '@/config/type';
import { CommentRes } from '../Comment/type';

export interface CommentListRes {
  content: CommentRes[];
  page: Pagination;
}
