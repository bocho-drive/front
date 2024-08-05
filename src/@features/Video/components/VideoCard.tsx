import * as S from '@/styles/index.style';
import { useModal } from '../../../components/templates/Modal/useModal';
import VideoInfoModal from './VideoInfoModal';
import { Video } from '../type';
import { getYoutubeThumbnailUrl } from '@/util/util';

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props) => {
  const handleOpen = useModal((state) => state.handleOpen);
  const thumbnailUrl = getYoutubeThumbnailUrl(video.url);

  return (
    <S.div.Card onClick={() => handleOpen(video.id, 'video')}>
      <S.div.Column $gap={20}>
        <S.h.H2 $maxLines={2}>{video.title}</S.h.H2>

        <img src={thumbnailUrl} style={{ width: '100%' }} />
        <S.small.Small>작성자 : {video.nickName}</S.small.Small>
      </S.div.Column>

      <VideoInfoModal data={video} />
    </S.div.Card>
  );
};

export default VideoCard;
