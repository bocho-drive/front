import { Pagination } from '@/config/type';

type Category = 'GENERAL' | 'VOTE' | 'TIP' | 'CHALLENGE_CERTIFICATION';

export interface CommunityListReq {
  category?: string | null;
  page?: number;
  size?: number;
  sortBy?: 'createdAt' | 'viewCount';
  isAsc?: boolean;
}

export type CommunityListRes = Pagination<CommunityRes[]>;

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
