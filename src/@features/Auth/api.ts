import { apiWithoutToken, Response } from '@/config/axios';
import { LoginReq, LoginRes, RegisterReq } from './type';

/** 회원가입 */
export const signUp = async (data: RegisterReq): Promise<void> => {
  await apiWithoutToken.post<Response<void>>('signup', data);
};

/** 로그인 */
export const signIn = async (data: LoginReq): Promise<LoginRes> => {
  const res = await apiWithoutToken.post<Response<LoginRes>>('signin', data);

  return res.data.data;
};
