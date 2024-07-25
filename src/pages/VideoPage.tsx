import VideoCard from '@/components/molecules/VideoCard';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';

const VideoPage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.div.Row $align="center" $between>
          <S.div.Column $gap={10} style={{ flex: 1 }}>
            <S.h.H1>운전 영상</S.h.H1>
            <S.p.P>운전에 도움이 되는 영상을 공유해보세요</S.p.P>
          </S.div.Column>
          <S.button.Button $colors="primary">영상 공유</S.button.Button>
        </S.div.Row>

        <S.div.Row $gap={20} $wrap>
          <VideoCard id={1} />
          <VideoCard id={2} />
          <VideoCard id={3} />
          <VideoCard id={4} />
          <VideoCard id={5} />
          <VideoCard id={6} />
        </S.div.Row>
      </S.div.Column>
    </DriveLayout>
  );
};

export default VideoPage;
