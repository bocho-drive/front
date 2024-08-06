import { Pagination } from '@/config/type';

export interface VideoList {
  content: Video[];
  page: Pagination;
}

export interface Video {
  id: number;
  title: string;
  url: string;
}

export interface VideoDetail {
  id: number;
  userId: number;
  nickName: string;
  title: string;
  url: string;
  createdAt: string;
}

export interface VideoPostReq {
  userId: number;
  title: string;
  url: string;
}
