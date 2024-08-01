import { apiWithoutToken, Response } from '@/config/axios';
import { LoginReq, LoginRes, RegisterReq } from './type';

export const signUp = async (data: RegisterReq): Promise<void> => {
  await apiWithoutToken.post<Response<void>>('signup', data);
};

export const signIn = async (data: LoginReq): Promise<LoginRes> => {
  const res = await apiWithoutToken.post<Response<LoginRes>>('signin', data);

  return res.data.data;
};
