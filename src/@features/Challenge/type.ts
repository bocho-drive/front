import { Pagination } from '@/config/type';

export interface Challenge {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export type ChallengeList = Pagination<Challenge[]>;
