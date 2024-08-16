import { Pagination } from '@/config/type';

/** 인피니티 스크롤 페이지 next param */

export const nextPageParam = (page: Pagination) => {
  const { number, size, totalElements } = page;
  if (size * (number + 1) >= totalElements) return undefined;
  return page.number + 1;
};
