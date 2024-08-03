export interface VotePostReq {
  communityId: number;
  agreeYn: boolean;
}

export interface Vote {
  userId: number;
  agreeYn: boolean;
}
