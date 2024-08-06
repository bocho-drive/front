export interface VotePostReq {
  communityId: number;
  agreeYn: boolean;
}

export interface Vote {
  id: number;
  userId: number;
  agreeYn: boolean;
}
