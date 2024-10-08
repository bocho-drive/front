import { Link } from 'react-router-dom';

import * as S from '@/styles/index.style';
import AuthModal from '../../@features/Auth/components/AuthModal/AuthModal';
import { useAuthModal } from '../../@features/Auth/components/AuthModal/useAuthModal';
import UserProfile from '../molecules/UserProfile';
import HeaderMenu from '../molecules/HeaderMenu';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

const Header = () => {
  const handleOpenAuthModal = useAuthModal((state) => state.handleOpen);
  const isLogin = useAuthStore((state) => state.isLogin());

  return (
    <S.div.Container style={{ height: '100px', justifyContent: 'center' }}>
      <S.div.Row $width={90} $align="center" $between>
        <S.div.Row $gap={100} $align="center">
          <Link to="/">
            <S.div.Row $align="center" $gap={20}>
              <img src="/icon-60x60.png" alt="logo" />
              <S.h.H2>보초운전</S.h.H2>
            </S.div.Row>
          </Link>

          <HeaderMenu />
        </S.div.Row>

        {isLogin ? <UserProfile /> : <S.button.Button onClick={handleOpenAuthModal}>로그인</S.button.Button>}
        <AuthModal />
      </S.div.Row>
    </S.div.Container>
  );
};

export default Header;
