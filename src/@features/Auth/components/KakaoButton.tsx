import * as S from '@/styles/index.style';
import KakaoIcon from '@/assets/icons/kakao.svg?react';

interface Props {
  text: string;
}

const url = import.meta.env.VITE_KAKAO_LOGIN_URL;

const KakaoButton = ({ text }: Props) => {
  const handleSignInWithKakao = () => {
    window.location.href = url;
  };

  return (
    <S.button.Button $height={50} $padding={0} style={{ backgroundColor: '#FEE500' }} type="button" onClick={handleSignInWithKakao}>
      <S.div.Row $justify="center" $align="center" $gap={10}>
        <KakaoIcon />
        <S.h.H5>{text}</S.h.H5>
      </S.div.Row>
    </S.button.Button>
  );
};

export default KakaoButton;
