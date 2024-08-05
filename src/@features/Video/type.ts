export interface Video {
  id: number;
  nickname: string;
  title: string;
  url: string;
  createdAt: string;
}

export interface VideoPostReq {
  userId: number;
  title: string;
  url: string;
}
