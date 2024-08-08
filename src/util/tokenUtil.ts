import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getRefreshToken = (): string | undefined => {
  return cookies.get('refreshToken');
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};
