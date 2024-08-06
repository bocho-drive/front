import { Pagination } from '@/config/type';

// API
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
