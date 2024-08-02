export interface PaginationRes<T> {
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  content: T;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
}

export interface PaginationReq {
  page?: number;
  size?: number;
  isAsc?: boolean;
}
