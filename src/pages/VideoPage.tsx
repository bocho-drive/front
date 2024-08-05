import { getVideos } from '@/@features/Video/api';
import VideoNewModal from '@/@features/Video/components/VideoNewModal';
import DriveLayout from '@/components/templates/DriveLayout';
import { useModal } from '@/components/templates/Modal/useModal';
import * as S from '@/styles/index.style';
import { useEffect } from 'react';

const VideoPage = () => {
  const handleOpen = useModal((state) => state.handleOpen);

  useEffect(() => {
    getVideos({ page: 0, size: 2 });
  }, []);
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.div.Row $align="center" $between>
          <S.div.Column $gap={10} style={{ flex: 1 }}>
            <S.h.LayoutTitle>운전 영상 🎥</S.h.LayoutTitle>
            <S.p.P>운전에 도움이 되는 영상을 공유해보세요</S.p.P>
          </S.div.Column>
          <S.button.Button $colors="primary" onClick={() => handleOpen(0, 'video')}>
            영상 공유
          </S.button.Button>
        </S.div.Row>

        <S.div.Grid $repeat={3}></S.div.Grid>
      </S.div.Column>

      <VideoNewModal />
    </DriveLayout>
  );
};

export default VideoPage;
