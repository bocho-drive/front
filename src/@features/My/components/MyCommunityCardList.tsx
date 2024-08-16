import { CommunityRes } from '@/@features/Community/type';
import CommunityCard, { CommunityCategoryBadge } from '@/components/molecules/CommunityCard';
import NotExistsLayout from '@/components/templates/NotExistsLayout';
import useScroll from '@/hooks/useScroll';
import { Link } from 'react-router-dom';
import { useMyCommunityListInfiniteQuery } from '../useMyQuery';
import { getCommunityLink } from '@/utils/stringUtil';

const MyCommunityCardList = () => {
  const { data, fetchNextPage, hasNextPage } = useMyCommunityListInfiniteQuery();
  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });

  return (
    <NotExistsLayout isExists={data.pages[0].content.length > 0}>
      {data.pages.map((page) =>
        page.content.map((community: CommunityRes) => {
          return (
            <Link key={community.id} to={getCommunityLink(community.category, community.id)}>
              <CommunityCard data={community} topComponent={<CommunityCategoryBadge category={community.category} />} />
            </Link>
          );
        })
      )}
    </NotExistsLayout>
  );
};

export default MyCommunityCardList;
