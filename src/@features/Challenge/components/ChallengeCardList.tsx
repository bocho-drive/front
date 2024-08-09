import useScroll from '@/hooks/useScroll';
import { ReactNode } from 'react';
import ChallengeCard from './ChallengeCard';
import { useChallengeListSuspenseInfiniteQuery, useChallengeListSuspenseQuery } from '../useChallengeQuery';
import NotExistsLayout from '@/components/templates/NotExistsLayout';

export const ChallengeInfiniteCardList = (): ReactNode => {
  const { fetchNextPage, hasNextPage, data } = useChallengeListSuspenseInfiniteQuery();
  useScroll({ fetchNextPage, hasNextPage, length: data.pages.length });

  return (
    <NotExistsLayout isExists={data.pages[0].content.length > 0}>
      {data.pages.map((page) =>
        page.content.map((challenge) => {
          return <ChallengeCard key={challenge.id} challenge={challenge} />;
        })
      )}
    </NotExistsLayout>
  );
};

export const ChallengeCardList = (): ReactNode => {
  const { data } = useChallengeListSuspenseQuery();
  return (
    <NotExistsLayout isExists={data.content.length > 0}>
      {data.content.map((challenge) => {
        return <ChallengeCard key={challenge.id} challenge={challenge} />;
      })}
    </NotExistsLayout>
  );
};
