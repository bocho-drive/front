import { signIn } from '@/@features/Auth/api';
import { useAuthModal } from '@/@features/Auth/components/AuthModal/useAuthModal';
import { LoginSchema, loginSchema } from '@/@features/Auth/yup';
import GoogleButton from '@/@features/Auth/components/GoogleButton';
import KakaoButton from '@/@features/Auth/components/KakaoButton';
import LineText from '@/components/atoms/LineText';
import * as S from '@/styles/index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../useAuthStore';
import { setAccessToken } from '@/util/tokenUtil';

const LoginForm = () => {
  const setUserInfo = useAuthStore((state) => state.setUserInfo);
  const handleClose = useAuthModal((state) => state.handleClose);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: LoginSchema) => {
    signIn(data).then((res) => {
      setAccessToken(res.accessToken);
      setUserInfo({
        nickname: res.nickname,
        userId: res.userId,
        userRole: res.userRole,
      });
      handleClose();
    });
  };

  return (
    <S.div.Column $gap={10}>
      <form onSubmit={handleSubmit(handleLogin)}>
        <S.div.Column $gap={10} style={{ minWidth: '400px' }}>
          <S.div.Row $justify="center">
            <S.h.H1>로그인</S.h.H1>
          </S.div.Row>

          <S.input.Input type="email" placeholder="이메일" $size="medium" {...register('email')} />
          {errors.email && <S.span.ErrorSpan>{errors.email.message}</S.span.ErrorSpan>}

          <S.input.Input type="password" placeholder="비밀번호" $size="medium" {...register('password')} />
          {errors.password && <S.span.ErrorSpan>{errors.password.message}</S.span.ErrorSpan>}

          <S.button.Button $colors="primary" $height={50} type="submit">
            <S.h.H5>이메일로 로그인</S.h.H5>
          </S.button.Button>

          <LineText text="또는" />
        </S.div.Column>
      </form>
      <GoogleButton text="구글로 로그인하기" />
      <KakaoButton text="카카오로 로그인하기" />
    </S.div.Column>
  );
};

export default LoginForm;
