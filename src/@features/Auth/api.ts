import { apiWithoutToken, Response } from '@/config/axios';
import { LoginReq, RegisterReq } from './type';

export const signUp = async (data: RegisterReq): Promise<void> => {
  const res = await apiWithoutToken.post<Response<void>>('signup', data);

  return res.data.data;
};

export const signIn = async (data: LoginReq): Promise<string> => {
  const res = await apiWithoutToken.post<string>('signin', data);

  return res.data;
};
