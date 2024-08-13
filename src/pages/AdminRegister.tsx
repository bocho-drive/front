import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from '@/styles/index.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { signUp } from '@/@features/Auth/api';

interface RegisterFormProps {
  email: string;
  password: string;
  nickname: string;
}

const AdminRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormProps>({
    defaultValues: {
      email: '',
      password: '',
      nickname: '',
    },
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [registerError, setRegisterError] = useState<string | null>(null);

  const onSubmit = async (data: RegisterFormProps) => {
    try {
      await signUp({
        email: data.email,
        password: data.password,
        nickname: data.nickname,
        userRole: 'ADMIN',
      });
      console.log('회원가입 성공');
    } catch (error) {
      console.log('회원가입 실패:', error);
      setRegisterError('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const navigate = useNavigate();
  const { search } = useLocation();

  const handleToLogin = () => navigate('/admin/login' + search);

  return (
    <S.div.PageContainer>
      <S.div.FormContainer $gap={10} as="form" onSubmit={handleSubmit(onSubmit)}>
        <S.h.H3>회원가입</S.h.H3>
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
        <S.input.Input type="text" placeholder="닉네임" $size="medium" {...register('nickname', { required: '닉네임을 입력하세요' })} />
        {registerError && <p>{registerError}</p>}
        <S.div.CheckboxContainer>
          <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
          <label>Remember me</label>
        </S.div.CheckboxContainer>
        <S.button.Button $colors="primary" $height={50} type="submit">
          <S.h.H5>가입하기</S.h.H5>
        </S.button.Button>
        <S.div.Gap $height={10}></S.div.Gap>
        <S.h.H5 onClick={handleToLogin} style={{ cursor: 'pointer' }}>
          로그인
        </S.h.H5>
      </S.div.FormContainer>
    </S.div.PageContainer>
  );
};

export default AdminRegister;
