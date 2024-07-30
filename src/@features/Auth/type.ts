export interface RegisterReq extends LoginReq {
  nickname: string;
}

export interface LoginReq {
  email: string;
  password: string;
}
