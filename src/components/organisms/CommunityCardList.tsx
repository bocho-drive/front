import * as S from '@/styles/index.style';
import CommunityCard from '../molecules/CommunityCard';
import useScroll from '@/hooks/useScroll';
import { Category } from '@/@features/Community/type';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getCommunityList } from '@/@features/Community/api';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  category: Category;
}

const CommunityCardList = ({ category }: Props) => {
  const { pathname } = useLocation();

  const { data, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['communityList', category],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getCommunityList({ category, page: pageParam, size: 10 }),

    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;

      return lastPage.page.number + 1;
    },
  });
  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });

  if (data.pages.length === 0) return <S.h.H3>게시글이 없어요.</S.h.H3>;
  return (
    <S.div.Column $gap={20}>
      {data.pages.map((page) =>
        page.content.map((community) => {
          return (
            <Link to={`${pathname}/${community.id}`} key={community.id}>
              <CommunityCard data={community} />
            </Link>
          );
        })
      )}
    </S.div.Column>
  );
};

export default CommunityCardList;
