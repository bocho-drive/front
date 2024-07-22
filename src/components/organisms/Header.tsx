import { Link } from 'react-router-dom';

import * as S from '@/styles/index.style';

const Header = () => {
  return (
    <S.div.Row style={{ width: '100%' }} $between $align="center">
      <S.div.Row $align="center">
        <img src="/icon.png" width={100} alt="logo" />
        <S.h.H2>보초운전</S.h.H2>
      </S.div.Row>

      <S.div.Row $gap={20}>
        <Link to="/community">커뮤니티</Link>
        <Link to="/drive">운전하기</Link>
      </S.div.Row>

      <S.button.Button>로그인</S.button.Button>
    </S.div.Row>
  );
};

export default Header;
