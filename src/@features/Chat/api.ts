import { apiWithToken, Response } from '@/config/axios';

const BASEURL = '/chat';

export const getChatApporvalKey = async (applyId: number): Promise<string> => {
  const res = await apiWithToken.get<Response<string>>(`${BASEURL}/approval/${applyId}`);
  return res.data.data;
};
