import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import styled from 'styled-components';
import * as S from '@/styles/index.style';

// const PageContainer = styled.div`
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: 'Arial', sans-serif;
//   background-color: #f0f0f0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const FormContainer = styled.div`
//   background-color: white;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 300px;
//   text-align: center;
// `;

// const AdminInput = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const AdminLoginButton = styled.button`
//   width: 100%;
//   padding: 0.5rem;
//   background-color: #333;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #555;
//   }
// `;

// const CheckboxContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;

//   input {
//     margin-right: 0.5rem;
//   }
// `;

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = () => {
    // console.log(data);
    // 로그인 연결할 위치
  };

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
        {/* {errors.email && <p>{errors.email.message}</p>} */}
        <S.input.Input type="password" placeholder="비밀번호" $size="medium" {...register('password', { required: '비밀번호를 입력하세요' })} />
        {/* {errors.password && <p>{errors.password.message}</p>} */}
        <S.div.CheckboxContainer>
          <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
          <label>Remember me</label>
        </S.div.CheckboxContainer>
        <S.button.Button $colors="primary" $height={50} type="submit">
          <S.h.H5>로그인</S.h.H5>
        </S.button.Button>
      </S.div.FormContainer>
    </S.div.PageContainer>
  );
};

export default LoginForm;
