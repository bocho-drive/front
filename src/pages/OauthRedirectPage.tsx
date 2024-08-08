import { setAccessToken } from '@/util/tokenUtil';
import { useSearchParams } from 'react-router-dom';

const OauthRedirectPage = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('access_token'));

  setAccessToken(searchParams.get('access_token') as string);

  window.location.href = '/';

  return null;
};

export default OauthRedirectPage;
