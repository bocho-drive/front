import * as S from '@/styles/index.style';
import GoogleIcon from '@/assets/icons/google.svg?react';

interface Props {
  text: string;
}

const url = import.meta.env.VITE_GOOGLE_LOGIN_URL;

const GoogleButton = ({ text }: Props) => {
  const handleSignInWithGoogle = () => {
    window.location.href = url;
  };
  return (
    <S.button.Button $height={50} $padding={0} type="button" onClick={handleSignInWithGoogle}>
      <S.div.Row $justify="center" $align="center" $gap={10}>
        <GoogleIcon />
        <S.h.H5>{text}</S.h.H5>
      </S.div.Row>
    </S.button.Button>
  );
};

export default GoogleButton;
