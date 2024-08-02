export interface ChallengeVerifies {
  id: number;
  challengeId: number;
  title: string;
  content: string;
  category: 'CHALLENGE_VERIFIES';
  author: string;
  viewCount: number;
  likeCount: number;
  imgUrls: string[];
  createdAt: string;
}

export interface ChallengeVerifiesPostReq {
  title: string;
  content: string;
  category: ChallengeVerifies['category'];
  images: string[];
  challengeId: number;
}
