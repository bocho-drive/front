export interface PaginationRes {
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
