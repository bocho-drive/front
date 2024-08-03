export interface Pagination {
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
}

export interface PaginationReq {
  page?: number;
  size?: number;
  isAsc?: boolean;
}

export interface PaginationRes<T> {
  content: T;
  page: Pagination;
}
