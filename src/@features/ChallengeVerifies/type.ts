import { PaginationRes } from '@/config/type';
import { CATEGORY, CommunityDetailRes, CommunityListReq, CommunityRes } from '../Community/type';

export interface ChallengeVerifiesListReq extends CommunityListReq {}

// 챌린지 인증 목록 조회
export type ChallengeVerifiesListRes = PaginationRes<ChallengeVerifiesRes[]>;
export interface ChallengeVerifiesRes extends CommunityRes {
  challengeId: number;
}

// 챌린지 인증 상세 조회
export interface ChallengeVerifiesDetailRes extends CommunityDetailRes {
  category: typeof CATEGORY.CHALLENGE_VERIFY;
  challengeId: number;
}

export interface ChallengeVerifiesPostReq {
  title: string;
  content: string;
  image: File[];
}
