import { FormEvent } from 'react';

import * as S from '@/styles/index.style';
import { useAuth } from '@/@features/Auth/useAuth';
import { useAuthModal } from '@/@features/Auth/components/AuthModal/useAuthModal';
import LineText from '@/components/atoms/LineText';
import GoogleButton from '@/components/atoms/GoogleButton';
import KakaoButton from '@/components/atoms/KakaoButton';

const LoginForm = () => {
  const handleLogin = useAuth((state) => state.handleLogin);
  const handleClose = useAuthModal((state) => state.handleClose);

  const handleSubmitLogin = (e: FormEvent) => {
    e.preventDefault();
    handleLogin();
    handleClose();
  };
  return (
    <form onSubmit={handleSubmitLogin}>
      <S.div.Column $gap={10} style={{ minWidth: '400px' }}>
        <S.div.Row $justify="center">
          <S.h.H1>로그인</S.h.H1>
        </S.div.Row>
        <S.input.Input type="email" placeholder="이메일" $size="medium" />
        <S.input.Input type="password" placeholder="비밀번호" $size="medium" />
        <S.button.Button $colors="primary" $height={50}>
          <S.h.H5>이메일로 로그인</S.h.H5>
        </S.button.Button>

        <LineText text="또는" />

        <GoogleButton text="구글로 로그인하기" />
        <KakaoButton text="카카오로 로그인하기" />
      </S.div.Column>
    </form>
  );
};

export default LoginForm;
