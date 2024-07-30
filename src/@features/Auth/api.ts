import { api, Response } from '@/config/axios';
import { RegisterReq } from './type';

export const registerNewUser = async (data: RegisterReq): Promise<void> => {
  const res = await api.post<Response<void>>('api/v1/user/signup', data);

  return res.data.data;
};
