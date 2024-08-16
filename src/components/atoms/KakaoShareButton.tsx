import { shareKakao } from '@/utils/kakaoUtil';
import * as S from '@/styles/index.style';
import KakaoIcon from '@/assets/icons/kakao.svg?react';

interface Props {
  title: string;
  url?: string;
  displayIcon?: boolean;
  text?: string;
}

const KakaoShareButton = (props: Props) => {
  const { title, url = window.location.href, displayIcon = false, text = '공유하기' } = props;
  const shareKakaoLink = () => shareKakao({ title, url });

  // console.log({ url });

  return (
    <S.button.Button onClick={shareKakaoLink}>
      <S.div.Row $align="center" $gap={5}>
        {displayIcon && <KakaoIcon />}
        {text}
      </S.div.Row>
    </S.button.Button>
  );
};

export default KakaoShareButton;
