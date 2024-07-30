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
  verifiedYn: boolean;
  createdAt: string;
}

export interface CommunityDetailRes extends CommunityRes {
  content: string;
}

export interface CommunityPostReq {
  title: string;
  content: string;
  category: 'GENERAL' | 'VOTE' | 'TIP' | 'CHALLENGE_CERTIFICATION';
  author?: 'test';
}
