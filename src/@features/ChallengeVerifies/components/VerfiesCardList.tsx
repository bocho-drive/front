import * as S from '@/styles/index.style';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getChallengeVerifiesList } from '../api';
import useScroll from '@/hooks/useScroll';
import CommunityCard from '@/components/molecules/CommunityCard';
import { Link } from 'react-router-dom';
import { nextPageParam } from '@/util/util';

const VerfiesCardList = () => {
  const { data, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['chellengeVerifies'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getChallengeVerifiesList({ page: pageParam, size: 10 }),

    getNextPageParam: (lastPage) => nextPageParam(lastPage.page),
  });
  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });

  if (data.pages.length === 0) return <S.h.H3>게시글이 없어요.</S.h.H3>;
  return (
    <S.div.Column $gap={20}>
      {data.pages.map((page) =>
        page.content.map((verifies) => {
          return (
            <Link to={`/challenge_verifies/${verifies.id}`} key={verifies.id}>
              <CommunityCard key={verifies.id} data={verifies} />
            </Link>
          );
        })
      )}
    </S.div.Column>
  );
};

export default VerfiesCardList;
