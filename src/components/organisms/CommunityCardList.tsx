import * as S from '@/styles/index.style';
import CommunityCard from '../molecules/CommunityCard';
import useScroll from '@/hooks/useScroll';
import { Category } from '@/@features/Community/type';
import { useCommunityWithoutId } from '@/@features/Community/useCommunityQuery';

interface Props {
  category: Category;
}

const CommunityCardList = ({ category }: Props) => {
  const { data, fetchNextPage, hasNextPage } = useCommunityWithoutId(category).communityListQuery;
  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });

  if (data.pages.length === 0) return <S.h.H3>게시글이 없어요.</S.h.H3>;

  return <S.div.Column $gap={20}>{data.pages.map((page) => page.content.map((community) => <CommunityCard key={community.id} id={community.id} data={community} />))}</S.div.Column>;
};

export default CommunityCardList;
