import { errorToast, successToast } from '@/components/atoms/Toast/useToast';
import axios, { AxiosError, AxiosResponse } from 'axios';

export interface Response<T> {
  statusCode: 200 | 201;
  message: string;
  data: T;
}

export interface ErrorResponse {
  statusCode: 400 | 401 | 404 | 500;
  msg: string;
}

const ResFulfilled = (response: AxiosResponse<Response<unknown>>) => {
  successToast(response.data.message);
  return response;
};
const ResRejected = (error: AxiosError<ErrorResponse>) => {
  console.log({ error });

  // * 서버 오류
  if (error.response) {
    errorToast(error.response.data.msg);
    return Promise.reject(error.response.data);
  }

  // * 서버 네트워크 오류
  if (!error.response) {
    errorToast('네트워크 오류가 발생했어요.');
    return Promise.reject({ statusCode: 500, msg: '네트워크 오류가 발생했어요.' });
  }

  return Promise.reject(error);
};

// * 인가 없는 api
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  withCredentials: true, // cors
});
api.interceptors.response.use(ResFulfilled, ResRejected);

// * 인가 필요 api
export const apiWithToken = axios.create({
  baseURL: import.meta.env.VITE_API_TOKEN_URL as string,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  withCredentials: true, // cors
});

apiWithToken.interceptors.request.use(
  (config) => {
    const ls = localStorage.getItem('auth');
    if (!ls) return config;

    const json = JSON.parse(ls);
    const token = json?.state?.token;
    console.log({ token });
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiWithToken.interceptors.response.use(ResFulfilled, ResRejected);
