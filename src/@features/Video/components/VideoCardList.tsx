import * as S from '@/styles/index.style';
import { useVideoListSuspenseInfiniteQuery, useVideoListSuspenseQuery } from '../useVideoQuery';
import useScroll from '@/hooks/useScroll';
import VideoCard from './VideoCard';
import { Fragment } from 'react/jsx-runtime';

export const VideoCardInfiniteList = () => {
  const { data, fetchNextPage, hasNextPage } = useVideoListSuspenseInfiniteQuery();
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

export default VideoCardInfiniteList;

export const VideoCardList = () => {
  const { data } = useVideoListSuspenseQuery();

  if (data.content.length === 0) return <S.h.H3>게시글이 없어요.</S.h.H3>;
  return (
    <Fragment>
      {data.content.map((video) => {
        return <VideoCard key={video.id} video={video} />;
      })}
    </Fragment>
  );
};
