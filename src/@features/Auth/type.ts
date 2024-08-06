export type UserRole = 'USER' | 'ADMIN' | 'TEACHER';

export interface RegisterReq {
  email: string;
  password: string;
  nickname: string;
  userRole: UserRole;
}

export interface LoginReq {
  email: string;
  password: string;
}

export interface LoginRes {
  accessToken: string;
  userId: number;
  userRole: UserRole;
}
