import { Pagination } from '@/config/type';

export interface Challenge {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface ChallengeList {
  content: Challenge[];
  page: Pagination;
}

export interface ChallengePostReq {
  title: string;
  content: string;
}
