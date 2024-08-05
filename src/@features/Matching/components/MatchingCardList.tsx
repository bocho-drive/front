import * as S from '@/styles/index.style';
import useScroll from '@/hooks/useScroll';
import { useMatchingSuspenseInfiniteQuery } from '../useMatchingQuery';
import { Fragment } from 'react/jsx-runtime';
import MatchingCard from './MatchingCard';

const MatchingCardList = () => {
  const { data, hasNextPage, fetchNextPage } = useMatchingSuspenseInfiniteQuery();
  useScroll({ hasNextPage, fetchNextPage, length: data.pages.length });

  if (data.pages.length === 0) return <S.h.H3>게시글이 없어요.</S.h.H3>;
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

export default MatchingCardList;
