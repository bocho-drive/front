import useScroll from '@/hooks/useScroll';
import { useMatchingSuspenseInfiniteQuery, useMatchingSuspenseQuery } from '../useMatchingQuery';
import { Fragment } from 'react/jsx-runtime';
import MatchingCard from './MatchingCard';
import NotExists from '@/components/atoms/NotExists';

export const MatchingCardInfiniteList = () => {
  const { data, hasNextPage, fetchNextPage } = useMatchingSuspenseInfiniteQuery();
  useScroll({ hasNextPage, fetchNextPage, length: data.pages.length });

  if (data.pages.length === 0) return <NotExists />;
  return (
    <Fragment>
      {data.pages.map((page) =>
        page.content.map((matching) => {
          return <MatchingCard key={matching.id} matching={matching} />;
        })
      )}
    </Fragment>
  );
};

export const MatchingCardList = () => {
  const { data } = useMatchingSuspenseQuery();

  if (data.content.length === 0) return <NotExists />;
  return (
    <Fragment>
      {data.content.map((matching) => {
        return <MatchingCard key={matching.id} matching={matching} />;
      })}
    </Fragment>
  );
};
