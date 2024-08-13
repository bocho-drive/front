import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from '@/styles/index.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { signIn } from '@/@features/Auth/api';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

interface LoginFormProps {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { search } = useLocation();
  const { isLogin } = useAuthStore();

  const onSubmit = async (data: LoginFormProps) => {
    try {
      const response = await signIn(data);
      console.log(response);

      if (isLogin()) {
        navigate('/admin');
      } else {
        setLoginError('로그인에 실패했습니다. 다시 시도해주세요.');
      }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    } catch (error) {
      console.error('로그인 실패:', error);
      setLoginError('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleToRegister = () => navigate('/admin/register' + search);

  return (
    <S.div.PageContainer>
      <S.div.FormContainer $gap={10} as="form" onSubmit={handleSubmit(onSubmit)}>
        <S.h.H3>로그인</S.h.H3>
        <S.input.Input
          type="text" // email로 하면 이상한 말풍선 튀어나옴
          placeholder="이메일 형식으로 입력하세요"
          $size="medium"
          {...register('email', {
            required: '이메일을 입력하세요',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '올바른 이메일 형식을 입력하세요',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <S.input.Input type="password" placeholder="비밀번호" $size="medium" {...register('password', { required: '비밀번호를 입력하세요' })} />
        {errors.password && <p>{errors.password.message}</p>}
        {loginError && <p>{loginError}</p>}
        <S.div.CheckboxContainer>
          <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
          <label>Remember me</label>
        </S.div.CheckboxContainer>
        <S.button.Button $colors="primary" $height={50} type="submit">
          <S.h.H5>로그인</S.h.H5>
        </S.button.Button>
        <S.div.Gap $height={10}></S.div.Gap>
        <S.h.H5 onClick={handleToRegister} style={{ cursor: 'pointer' }}>
          회원가입
        </S.h.H5>
      </S.div.FormContainer>
    </S.div.PageContainer>
  );
};

export default AdminLogin;
