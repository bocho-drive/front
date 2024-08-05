import * as S from '@/styles/index.style';
import { useModal } from '../../../components/templates/Modal/useModal';
import VideoInfoModal from './VideoInfoModal';
import { Video } from '../type';

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  const handleOpen = useModal((state) => state.handleOpen);

  return (
    <S.div.Card onClick={() => handleOpen(video.id, 'video')}>
      <S.div.Column $gap={20}>
        <S.h.H2 $maxLines={2}>영상 제목</S.h.H2>
      </S.div.Column>

      <VideoInfoModal id={video.id} />
    </S.div.Card>
  );
};

export default VideoCard;
