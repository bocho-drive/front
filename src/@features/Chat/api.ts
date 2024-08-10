import { apiWithToken, Response } from '@/config/axios';
import { Chat } from './type';

const BASEURL = 'chat';

export const getChatApporvalKey = async (applyId: number): Promise<string> => {
  const res = await apiWithToken.get<Response<string>>(`${BASEURL}/approval/${applyId}`);
  return res.data.data;
};

export const getChatMessages = async (applyId: number): Promise<Response<Chat[]>> => {
  const res = await apiWithToken.get<Response<Chat[]>>(`${BASEURL}/${applyId}`);
  return res.data;
};
