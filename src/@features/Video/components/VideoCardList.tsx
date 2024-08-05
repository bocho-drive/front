import * as S from '@/styles/index.style';
import { useVideoSuspenseInfiniteQuery } from '../useVideoQuery';
import useScroll from '@/hooks/useScroll';
import VideoCard from './VideoCard';

const VideoCardList = () => {
  const { data, fetchNextPage, hasNextPage } = useVideoSuspenseInfiniteQuery();
  useScroll({ fetchNextPage, hasNextPage, length: data.pages.length });

  return (
    <S.div.Grid $repeat={3}>
      {data.pages.map((page) =>
        page.content.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })
      )}
    </S.div.Grid>
  );
};

export default VideoCardList;
