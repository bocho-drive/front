import { useAuthStore } from '@/@features/Auth/useAuthStore';
import { getMyProfile } from '@/@features/My/api';
import { MyProfileRes } from '@/@features/My/type';
import Loading from '@/components/atoms/Loading';
import { setAccessToken } from '@/utils/tokenUtil';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OauthRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const setUserInfo = useAuthStore((state) => state.setUserInfo);
  const navigate = useNavigate();

  useEffect(() => {
    // AT토큰 저장
    setAccessToken(searchParams.get('access_token') as string);

    // 사용자 정보 저장
    (async () => {
      const res: MyProfileRes = await getMyProfile();
      setUserInfo({
        nickname: res.nickname,
        userId: res.id,
        userRole: res.userRole,
      });
    })();
    navigate('/');
  }, [searchParams, setUserInfo, navigate]);

  return <Loading />;
};

export default OauthRedirectPage;
