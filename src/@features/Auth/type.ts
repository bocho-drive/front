export interface RegisterReq {
  email: string;
  password: string;
  nickname: string;
}

export interface LoginReq {
  email: string;
  password: string;
}

export interface LoginRes {
  accessToken: string;
  userId: number;
  userRole: 'USER' | 'ADMIN' | 'TEACHER';
}
