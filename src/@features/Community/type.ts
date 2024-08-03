import { PaginationReq, PaginationRes } from '@/config/type';

type Category = 'GENERAL' | 'VOTE' | 'TIP' | 'CHALLENGE_VERIFIES';

export interface CommunityListReq extends PaginationReq {
  category?: string | null;
  sortBy?: 'createdAt' | 'viewCount';
}

export interface CommunityListRes {
  content: CommunityRes[];
  page: PaginationRes;
}

export interface CommunityRes {
  id: number;
  title: string;
  author: string;
  viewCount: number;
  likeCount: number;
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
  imgUrls: string[];
}

export interface CommunityPostReq {
  title: string;
  content: string;
  category: Category;
  image: File[];
}
