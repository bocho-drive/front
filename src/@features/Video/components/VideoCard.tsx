import * as S from '@/styles/index.style';
import { useModal } from '../../../components/templates/Modal/useModal';
import VideoInfoModal from './VideoInfoModal';
import { getYoutubeThumbnailUrl } from '@/utils/stringUtil';
import Modal from '@/components/templates/Modal/Modal';
import { Video } from '../type';

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
      </S.div.Column>

      <Modal type="video" id={video.id}>
        <VideoInfoModal video={video} />
      </Modal>
    </S.div.Card>
  );
};

export default VideoCard;
