import * as S from '@/styles/index.style';
import LineText from '../atoms/LineText';
import GoogleButton from '../atoms/GoogleButton';
import KakaoButton from '../atoms/KakaoButton';

const RegisterForm = () => {
  return (
    <form>
      <S.div.Column $gap={10} style={{ minWidth: '400px' }}>
        <S.div.Row $justify="center">
          <S.h.H1>회원가입</S.h.H1>
        </S.div.Row>
        <S.input.Input type="email" placeholder="이메일" $size="medium" />
        <S.input.Input type="password" placeholder="비밀번호" $size="medium" />
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
