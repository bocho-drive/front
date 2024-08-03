import { apiWithToken } from '@/config/axios';

const BASEURL = 'images';

export const deleteImage = async (url: string) => {
  await apiWithToken.delete(BASEURL, { data: { url } });
};
