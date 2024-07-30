import * as S from '@/styles/index.style';
import { useModal } from '../templates/Modal/useModal';
import VideoModal from './VideoModal';

interface Props {
  imgSrc?: string;
  id: number;
}

const VideoCard = (props: Props) => {
  const handleOpen = useModal((state) => state.handleOpen);

  const { imgSrc = 'https://via.placeholder.com/200x300', id } = props;
  return (
    <S.div.Card onClick={() => handleOpen(id, 'video')}>
      <S.div.Column $gap={20}>
        <img src={imgSrc} />
        <S.h.H2 $maxLines={2}>영상 제목</S.h.H2>
      </S.div.Column>

      <VideoModal id={id} />
    </S.div.Card>
  );
};

export default VideoCard;
