import { Link } from 'react-router-dom';

import * as S from '@/styles/index.style';
import AuthModal from './AuthModal/AuthModal';
import { useAuthModal } from './AuthModal/useAuthModal';
import { useAuth } from '@/@features/Auth/useAuth';
import UserProfile from '../molecules/UserProfile';

const Header = () => {
  const handleOpen = useAuthModal((state) => state.handleOpen);
  const isAuth = useAuth((state) => state.isAuth);

  return (
    <S.div.Row $width={100} $justify="center">
      <S.div.Row $width={90} $align="center" $between>
        <S.div.Row $gap={100} $align="center">
          <S.div.Row $align="center">
            <img src="/icon.png" width={100} alt="logo" />
            <S.h.H2>보초운전</S.h.H2>
          </S.div.Row>

          <S.div.Row $gap={20}>
            <Link to="/community">커뮤니티</Link>
            <Link to="/drive">운전하기</Link>
          </S.div.Row>
        </S.div.Row>

        {isAuth ? <UserProfile /> : <S.button.Button onClick={handleOpen}>로그인</S.button.Button>}
        <AuthModal />
      </S.div.Row>
    </S.div.Row>
  );
};

export default Header;
