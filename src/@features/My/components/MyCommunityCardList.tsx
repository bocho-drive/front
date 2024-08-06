import { useAuth } from '@/@features/Auth/useAuth';
import { useMyCommunityListInfiniteQuery } from '../useMyQuery';
import NotExistsLayout from '@/components/templates/NotExistsLayout';
import CommunityCard from '@/components/molecules/CommunityCard';
import useScroll from '@/hooks/useScroll';

const MyCommunityCardList = () => {
  const userId = useAuth((state) => state.loginInfo?.userId);
  const { data, fetchNextPage, hasNextPage } = useMyCommunityListInfiniteQuery(userId!);
  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });

  return (
    <NotExistsLayout isExists={data.pages.length > 0}>
      {data.pages.map((page) =>
        page.content.map((community) => {
          return (
            // <Link >
            <CommunityCard data={community} />
            // </Link>
          );
        })
      )}
    </NotExistsLayout>
  );
};

export default MyCommunityCardList;
