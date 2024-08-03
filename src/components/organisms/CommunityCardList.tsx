import * as S from '@/styles/index.style';
import CommunityCard from '../molecules/CommunityCard';
import { getCommunityList } from '@/@features/Community/api';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import useScroll from '@/hooks/useScroll';
import Loading from '../atoms/Loading';

const CommunityCardList = () => {
  const { search } = useLocation();
  const category = new URLSearchParams(search).get('category');

  const {
    data: communityList,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useSuspenseInfiniteQuery({
    queryKey: ['communityList', category],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getCommunityList({ category, page: pageParam, size: 10 }),

    getNextPageParam: (lastPage) => {
      const { size, number, totalElements } = lastPage.page;
      if (size * (number + 1) >= totalElements) return undefined;

      return lastPage.page.number + 1;
    },
  });
  useScroll({ length: communityList.pages.length, fetchNextPage, hasNextPage });

  if (communityList.pages.length === 0) return <S.h.H3>게시글이 없어요.</S.h.H3>;

  return (
    <S.div.Column $gap={20}>
      {communityList.pages.map((page) => page.content.map((community) => <CommunityCard key={community.id} id={community.id} data={community} />))}

      {hasNextPage && (
        <S.button.Button onClick={() => fetchNextPage()} disabled={isLoading}>
          {isLoading ? <Loading /> : '더보기'}
        </S.button.Button>
      )}
    </S.div.Column>
  );
};

export default CommunityCardList;
