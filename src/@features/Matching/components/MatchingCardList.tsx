import useScroll from '@/hooks/useScroll';
import { useMatchingSuspenseInfiniteQuery, useMatchingSuspenseQuery } from '../useMatchingQuery';
import MatchingCard from './MatchingCard';
import NotExistsLayout from '@/components/templates/NotExistsLayout';

export const MatchingCardInfiniteList = () => {
  const { data, hasNextPage, fetchNextPage } = useMatchingSuspenseInfiniteQuery();
  useScroll({ hasNextPage, fetchNextPage, length: data.pages.length });

  return (
    <NotExistsLayout isExists={data.pages[0].content.length > 0}>
      {data.pages.map((page) =>
        page.content.map((matching) => {
          return <MatchingCard key={matching.id} matching={matching} />;
        })
      )}
    </NotExistsLayout>
  );
};

export const MatchingCardList = () => {
  const { data } = useMatchingSuspenseQuery();

  return (
    <NotExistsLayout isExists={data.content.length > 0}>
      {data.content.map((matching) => {
        return <MatchingCard key={matching.id} matching={matching} />;
      })}
    </NotExistsLayout>
  );
};
