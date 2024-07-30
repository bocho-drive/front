import * as S from '@/styles/index.style';
import LineText from '../atoms/LineText';
import GoogleButton from '../atoms/GoogleButton';
import KakaoButton from '../atoms/KakaoButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema, registerSchema } from '@/@features/Auth/yup';
import { registerNewUser } from '@/@features/Auth/api';
import { useAuthModal } from '@/@features/Auth/components/AuthModal/useAuthModal';
import { successToast } from '../atoms/Toast/useToast';

const RegisterForm = () => {
  const { setIsLoginModal } = useAuthModal((state) => ({
    setIsLoginModal: state.setIsLoginModal,
  }));
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterSchema>({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data: RegisterSchema) => {
    registerNewUser(data).then(() => {
      successToast('회원가입이 완료되었습니다.');
      setIsLoginModal(true);
    });
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <S.div.Column $gap={10} style={{ minWidth: '400px' }}>
        <S.div.Row $justify="center">
          <S.h.H1>회원가입</S.h.H1>
        </S.div.Row>

        <S.input.Input type="email" placeholder="이메일" $size="medium" {...register('email')} />
        {errors.email && <S.span.ErrorSpan>{errors.email.message}</S.span.ErrorSpan>}

        <S.input.Input type="text" placeholder="닉네임" $size="medium" {...register('nickname')} />
        {errors.nickname && <S.span.ErrorSpan>{errors.nickname.message}</S.span.ErrorSpan>}

        <S.input.Input type="password" placeholder="비밀번호" $size="medium" {...register('password')} />
        {errors.password && <S.span.ErrorSpan>{errors.password.message}</S.span.ErrorSpan>}

        <S.button.Button $colors="primary" $height={50}>
          <S.h.H5>이메일로 회원가입</S.h.H5>
        </S.button.Button>

        <LineText text="또는" />

        <GoogleButton text="구글로 회원가입하기" />
        <KakaoButton text="카카오로 회원가입하기" />
      </S.div.Column>
    </form>
  );
};

export default RegisterForm;
