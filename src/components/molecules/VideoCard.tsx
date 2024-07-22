import * as S from '@/styles/index.style';

interface Props {
  imgSrc?: string;
}

const VideoCard = (props: Props) => {
  const { imgSrc = 'https://via.placeholder.com/300x400' } = props;
  return (
    <S.div.Column $gap={20}>
      <img src={imgSrc} />
      <S.h.H2 $maxLines={2}>영상 제목</S.h.H2>
    </S.div.Column>
  );
};

export default VideoCard;
