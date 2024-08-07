import { Pagination } from '@/config/type';
import { CATEGORY, CommunityDetailRes, CommunityRes } from '../Community/type';

// 챌린지 인증 목록 조회
export type ChallengeVerifiesListRes = {
  content: ChallengeVerifiesRes[];
  page: Pagination;
};

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
