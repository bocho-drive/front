import * as S from '@/styles/index.style';
import KakaoIcon from '@/assets/icons/kakao.svg?react';

interface Props {
  text: string;
}
const KakaoButton = ({ text }: Props) => {
  return (
    <S.button.Button $height={50} $padding={0} style={{ backgroundColor: '#FEE500' }}>
      <S.div.Row $justify="center" $align="center" $gap={10}>
        <KakaoIcon />
        <S.h.H5>{text}</S.h.H5>
      </S.div.Row>
    </S.button.Button>
  );
};

export default KakaoButton;
