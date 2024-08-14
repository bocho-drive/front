import { apiWithoutToken, apiWithToken, Response } from '@/config/axios';
import { LoginReq, LoginRes, RegisterReq } from './type';

/** 회원가입 */
export const signUp = async (data: RegisterReq): Promise<void> => {
  await apiWithoutToken.post<Response<void>>('signup', data);
};

/**
 * 로그인
 * 로그인시, cookie에 RT저장됨
 */
export const signIn = async (data: LoginReq): Promise<LoginRes> => {
  const res = await apiWithoutToken.post<Response<LoginRes>>('signin', data);

  return res.data.data;
};

/** 로그아웃 */
export const signOut = async (): Promise<void> => {
  await apiWithToken.delete<Response<void>>('logout');
};
