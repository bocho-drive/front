import { signUp } from '@/@features/Auth/api';
import { useAuthModal } from '@/@features/Auth/components/AuthModal/useAuthModal';
import { RegisterSchema, registerSchema } from '@/@features/Auth/yup';
import * as S from '@/styles/index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

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
    signUp({
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      userRole: data.isTeacher ? 'TEACHER' : 'USER',
    }).then(() => {
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

        <S.div.Row>
          <S.input.Checkbox id="is-teacher" type="checkbox" {...register('isTeacher')} />
          <S.label.Label htmlFor="is-teacher">선생님 계정으로 가입하기</S.label.Label>
        </S.div.Row>

        <S.button.Button $colors="primary" $height={50} type="submit">
          <S.h.H5>이메일로 회원가입</S.h.H5>
        </S.button.Button>
      </S.div.Column>
    </form>
  );
};

export default RegisterForm;
