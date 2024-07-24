import VideoCard from '@/components/molecules/VideoCard';
import VideoModal from '@/components/molecules/VideoModal';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';

const VideoPage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.div.Row $align="center" $between>
          <S.div.Column $gap={10}>
            <S.h.H1>운전 영상</S.h.H1>
            <S.p.P>운전에 도움이 되는 영상을 공유해보세요</S.p.P>
          </S.div.Column>
          <S.button.Button>영상 공유</S.button.Button>
        </S.div.Row>

        <S.div.Grid $repeat={3}>
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </S.div.Grid>
      </S.div.Column>

      <VideoModal />
    </DriveLayout>
  );
};

export default VideoPage;
