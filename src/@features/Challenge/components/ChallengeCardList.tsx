import Loading from '@/components/atoms/Loading';
import useScroll from '@/hooks/useScroll';
import * as S from '@/styles/index.style';
import { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';
import ChallengeCard from './ChallengeCard';
import { useChallengeListSuspenseInfiniteQuery, useChallengeListSuspenseQuery } from '../useChallengeQuery';

export const ChallengeInfiniteCardList = (): ReactNode => {
  const { fetchNextPage, hasNextPage, data, isLoading } = useChallengeListSuspenseInfiniteQuery();
  useScroll({ fetchNextPage, hasNextPage, length: data?.pages.length ?? 0 });

  if (isLoading) return <Loading />;
  if (data && data.pages.length === 0) return <S.h.H3>게시글이 없어요.</S.h.H3>;
  return (
    <Fragment>
      {data &&
        data.pages.map((page) =>
          page.content.map((challenge) => {
            return <ChallengeCard key={challenge.id} challenge={challenge} />;
          })
        )}
    </Fragment>
  );
};

export const ChallengeCardList = (): ReactNode => {
  const { data } = useChallengeListSuspenseQuery();
  if (data && data.content.length == 0) return <S.h.H3>게시글이 없어요.</S.h.H3>;
  return (
    <Fragment>
      {data &&
        data.content.map((challenge) => {
          return <ChallengeCard key={challenge.id} challenge={challenge} />;
        })}
    </Fragment>
  );
};
