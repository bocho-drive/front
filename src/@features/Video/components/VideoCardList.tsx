import useScroll from '@/hooks/useScroll';
import * as S from '@/styles/index.style';
import { useVideoListSuspenseInfiniteQuery, useVideoListSuspenseQuery } from '../useVideoQuery';
import VideoCard from './VideoCard';
import NotExistsLayout from '@/components/templates/NotExistsLayout';

export const VideoCardInfiniteList = () => {
  const { data, fetchNextPage, hasNextPage } = useVideoListSuspenseInfiniteQuery();
  useScroll({ fetchNextPage, hasNextPage, length: data.pages.length });

  return (
    <S.div.Grid $repeat={3}>
      <NotExistsLayout isExists={data.pages.length > 0}>
        {data.pages.map((page) =>
          page.content.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })
        )}
      </NotExistsLayout>
    </S.div.Grid>
  );
};

export default VideoCardInfiniteList;

export const VideoCardList = () => {
  const { data } = useVideoListSuspenseQuery();

  return (
    <NotExistsLayout isExists={data.content.length > 0}>
      {data.content.map((video) => {
        return <VideoCard key={video.id} video={video} />;
      })}
    </NotExistsLayout>
  );
};
