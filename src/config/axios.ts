import { LoginRes } from '@/@features/Auth/type';
import { useAuthStore } from '@/@features/Auth/useAuthStore';
import { errorToast, successToast } from '@/components/atoms/Toast/useToast';
import { getAccessToken, setAccessToken } from '@/util/tokenUtil';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export interface Response<T> {
  statusCode: 200 | 201;
  message: string;
  data: T;
}

export interface ErrorResponse<T> {
  statusCode: 400 | 401 | 404 | 500;
  message: string;
  data?: T;
}

/** /api/* 요청 interceptor */
const ReqFulfilled = (config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
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
const ResRejected = (error: AxiosError<ErrorResponse<unknown>>) => {
  const { config } = error;
  const { handleLogout } = useAuthStore.getState();

  // * 인가 오류
  if (error.response?.status === 401) {
    try {
      const err = error.response.data as ErrorResponse<LoginRes>;
      if (err.data === undefined) throw err;

      // data항목이 있는 경우, AT토큰 갱신처리
      setAccessToken(err.data.accessToken);
      successToast('토큰 갱신 완료');

      return apiWithToken.request(config!);
    } catch (error) {
      errorToast('회원정보가 만료되었어요.');
      errorToast('다시 로그인 해주세요.');
      handleLogout();
    }

    return Promise.reject(error.response.data);
  }

  // * 서버 오류
  if (error.response) {
    errorToast(error.response.data.message);
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
apiWithoutToken.interceptors.request.use((config) => config, ReqRejected);
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

export const formDataHeader = {
  'content-type': 'multipart/form-data',
  accept: 'application/json,',
};
// * 인가 필요 api(FormData)
// export const apiWithTokenFormData = axios.create({
//   baseURL: import.meta.env.VITE_API_TOKEN_URL as string,
//   headers: {
//     'content-type': 'multipart/form-data',
//     accept: 'application/json,',
//   },
//   withCredentials: true, // cors
// });

// * 어드민용 API
export const apiWithAdmin = axios.create({
  baseURL: import.meta.env.VITE_API_ADMIN_URL as string,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  withCredentials: true, // cors
});

apiWithAdmin.interceptors.request.use(ReqFulfilled, ReqRejected);
apiWithAdmin.interceptors.response.use(ResFulfilled, ResRejected);
// apiWithTokenFormData.interceptors.request.use(ReqFulfilled, ReqRejected);
// apiWithTokenFormData.interceptors.response.use(ResFulfilled, ResRejected);
