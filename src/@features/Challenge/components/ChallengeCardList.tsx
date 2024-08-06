import Loading from '@/components/atoms/Loading';
import useScroll from '@/hooks/useScroll';
import { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';
import ChallengeCard from './ChallengeCard';
import { useChallengeListSuspenseInfiniteQuery, useChallengeListSuspenseQuery } from '../useChallengeQuery';
import NotExists from '@/components/atoms/NotExists';

export const ChallengeInfiniteCardList = (): ReactNode => {
  const { fetchNextPage, hasNextPage, data, isLoading } = useChallengeListSuspenseInfiniteQuery();
  useScroll({ fetchNextPage, hasNextPage, length: data?.pages.length ?? 0 });

  if (isLoading) return <Loading />;
  if (data && data.pages.length === 0) return <NotExists />;
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
  if (data.content.length == 0) return <NotExists />;
  return (
    <Fragment>
      {data.content.map((challenge) => {
        return <ChallengeCard key={challenge.id} challenge={challenge} />;
      })}
    </Fragment>
  );
};
