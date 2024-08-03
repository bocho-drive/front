import { CommunityDetailRes, CommunityListReq } from '../Community/type';

type Category = 'CHALLENGE_VERIFIES';

export interface ChallengeVerifiesListReq extends CommunityListReq {
  category?: Category | null;
}

export interface ChallengeVerifiesRes extends CommunityDetailRes {
  category: Category;
  challengeId: number;
}
