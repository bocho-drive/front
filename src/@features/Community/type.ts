import { PaginationReq, PaginationRes } from '@/config/type';

type Category = 'GENERAL' | 'VOTE' | 'TIP' | 'CHALLENGE_VERIFIES';

export interface CommunityListReq extends PaginationReq {
  category?: string | null;
  sortBy?: 'createdAt' | 'viewCount';
}

export type CommunityListRes = PaginationRes<CommunityRes[]>;

export interface CommunityRes {
  id: number;
  title: string;
  viewCount: number;
  verifiedYN: boolean;
  createdAt: string;
}

export interface CommunityDetailRes {
  id: number;
  title: string;
  content: string;
  author: string;
  category: Category;
  viewCount: number;
  likesCount: number;
  createdAt: string;
  isAuthor: boolean;
}

export interface CommunityPostReq {
  title: string;
  content: string;
  category: Category;
}
