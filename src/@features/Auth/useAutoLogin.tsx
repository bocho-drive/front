import { useUserStore } from './useUserStore';
import { getRefreshToken } from '@/util/tokenUtil';

/**
 * RT토큰 cookie refreshToken
 * 유저 정보 userInfo-zutand-localstorage
 *
 * - RT토큰도 있고, 유저 정보도 있다면, PASS
 * - RT토큰이 없다면, PASS
 *
 * - 유저정보가 없다면, 사용자 정보를 불러온다
 */

const useAutoLogin = (): void => {
  const { userInfo, setUserInfo } = useUserStore((state) => ({
    userInfo: state.userInfo,
    setUserInfo: state.setUserInfo,
  }));

  // 1. RT토큰 확인
  const refreshToken = getRefreshToken();
  if (refreshToken === undefined) return;

  // 2. 유저 정보 확인
  if (userInfo === null) {
    // 서버로 accessToken을 보내서 userInfo를 받아온다.
    // setUserInfo(userInfo);
  }
};

export default useAutoLogin;
