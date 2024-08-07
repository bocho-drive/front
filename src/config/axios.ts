import { LoginRes } from '@/@features/Auth/type';
import { errorToast, successToast } from '@/components/atoms/Toast/useToast';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export interface Response<T> {
  statusCode: 200 | 201;
  message: string;
  data: T;
}

export interface ErrorResponse {
  statusCode: 400 | 401 | 404 | 500;
  msg: string;
}

/** 공통 요청 성공 */
const ReqFulfilled = (config: InternalAxiosRequestConfig) => {
  const ls = localStorage.getItem('auth');
  if (!ls) return config;

  const json = JSON.parse(ls);
  const loginState = json?.state?.loginInfo as LoginRes | null;
  const token = loginState?.accessToken;
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
};
/** 공통 요청 실패 */
const ReqRejected = (error: AxiosError) => {
  return Promise.reject(error);
};

/** 공통 응답 성공 */
const ResFulfilled = (response: AxiosResponse<Response<unknown>>) => {
  successToast(response.data.message);
  return response;
};
/** 공통 응답 실패 */
const ResRejected = (error: AxiosError<ErrorResponse>) => {
  console.log({ error });
  // 401 토큰 만료
  // RT -> AT 재발급

  // * RT - 몇번의 기회

  // axios는 이전 요청을 기억하고 있대요.

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
export const apiWithoutToken = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  withCredentials: true, // cors
});
apiWithoutToken.interceptors.request.use(ReqFulfilled, ReqRejected);
apiWithoutToken.interceptors.response.use(ResFulfilled, ResRejected);

// * 인가 필요 api
export const apiWithToken = axios.create({
  baseURL: import.meta.env.VITE_API_TOKEN_URL as string,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  withCredentials: true, // cors
});

apiWithToken.interceptors.request.use(ReqFulfilled, ReqRejected);
apiWithToken.interceptors.response.use(ResFulfilled, ResRejected);

// * 인가 필요 api(FormData)
export const apiWithTokenFormData = axios.create({
  baseURL: import.meta.env.VITE_API_TOKEN_URL as string,
  headers: {
    'content-type': 'multipart/form-data',
    accept: 'application/json,',
  },
  withCredentials: true, // cors
});

apiWithTokenFormData.interceptors.request.use(ReqFulfilled, ReqRejected);
apiWithTokenFormData.interceptors.response.use(ResFulfilled, ResRejected);
