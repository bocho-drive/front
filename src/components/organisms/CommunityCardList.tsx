import * as S from '@/styles/index.style';
import CommunityCard from '../molecules/CommunityCard';
import { getCommunityList } from '@/@features/Communities/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

const CommunityCardList = () => {
  const { search } = useLocation();
  const category = new URLSearchParams(search).get('category');

  const { data: communityList } = useSuspenseQuery({
    queryKey: ['communityList', category],
    queryFn: () => getCommunityList(category),
  });

  return (
    <S.div.Column $gap={20}>
      {communityList.content.length === 0 && <S.h.H3>게시글이 없어요.</S.h.H3>}

      {communityList.content.map((community) => (
        <CommunityCard key={community.id} id={community.id} community={community} />
      ))}
    </S.div.Column>
  );
};

export default CommunityCardList;
