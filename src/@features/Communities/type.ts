type Category = 'GENERAL' | 'VOTE' | 'TIP' | 'CHALLENGE_CERTIFICATION';

export interface CommunityListReq {}

export interface CommunityListRes {
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  content: CommunityRes[];
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

export interface CommunityRes {
  id: number;
  title: string;
  viewCount: number;
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
  createdAt: string;
}

export interface CommunityPostReq {
  title: string;
  content: string;
  category: Category;
}
