import { Pagination, PaginationReq } from '@/config/type';

export const CATEGORY = {
  GENERAL: 'GENERAL',
  VOTE: 'VOTE',
  TIP: 'TIP',
  CHALLENGE_VERIFY: 'CHALLENGE_VERIFY',
} as const;
export type Category = (typeof CATEGORY)[keyof typeof CATEGORY];

export interface CommunityListReq extends PaginationReq {
  category?: Category | null;
  sortBy?: 'createdAt' | 'viewCount';
}

export interface CommunityListRes {
  content: CommunityRes[];
  page: Pagination;
}

export interface CommunityRes {
  id: number;
  title: string;
  author: string;
  viewCount: number;
  likeCount: number;
  verifiedYN: boolean;
  createdAt: string;
  category: Category;
}

export interface CommunityDetailRes {
  id: number;
  title: string;
  category: Category;
  content: string;
  author: string;
  viewCount: number;
  likeCount: number;
  isAuthor: boolean;
  imgUrls: string[];
  createdAt: string;
}

export interface CommunityPostReq {
  title: string;
  content: string;
  category: Category;
  image: File[];
}
