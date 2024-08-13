import { Pagination } from '@/config/type';

type MatchingType = 'TEACHER' | 'STUDENT';
type MatchingStatus = 'WAITING' | 'PROGRESS' | 'CLEAR' | 'CANCEL';

export interface MatchingCardList {
  content: Matching[];
  page: Pagination;
}

export interface Matching {
  id: number;
  title: string;
  content: string;
  type: MatchingType;
  status: MatchingStatus;
  createdAt: string;
}

export interface MatchingDetail extends Matching {
  userId: number;
  studentId: number;
  studentName: string;
  teacherId: number;
  teacherUserId: number;
}

export interface MatchingPostReq {
  title: string;
  content: string;
  type: MatchingType;
}

export interface MatchingUpdateStatusReq {
  status: MatchingStatus;
  applyUserId?: number;
}
