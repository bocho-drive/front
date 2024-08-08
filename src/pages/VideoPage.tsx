import { useAuthStore } from '@/@features/Auth/useAuthStore';
import VideoCardInfiniteList from '@/@features/Video/components/VideoCardList';
import VideoNewModal from '@/@features/Video/components/VideoNewModal';
import DriveLayout from '@/components/templates/DriveLayout';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import { useModal } from '@/components/templates/Modal/useModal';
import * as S from '@/styles/index.style';

const VideoPage = () => {
  const handleOpen = useModal((state) => state.handleOpen);
  const confirmAuth = useAuthStore((state) => state.confirmAuth);

  const handleNew = () => {
    if (confirmAuth()) {
      handleOpen(0, 'video');
    }
  };

  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.div.Row $align="center" $between>
          <S.div.Column $gap={10} style={{ flex: 1 }}>
            <S.h.LayoutTitle>운전 영상 🎥</S.h.LayoutTitle>
            <S.p.P>운전에 도움이 되는 영상을 공유해보세요</S.p.P>
          </S.div.Column>
          <S.button.Button $colors="primary" onClick={handleNew}>
            영상 공유
          </S.button.Button>
        </S.div.Row>

        <ErrorSuspenseLayout>
          <VideoCardInfiniteList />
        </ErrorSuspenseLayout>
      </S.div.Column>

      <VideoNewModal />
    </DriveLayout>
  );
};

export default VideoPage;
