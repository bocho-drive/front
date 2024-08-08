import { useMyCommunityListInfiniteQuery } from '../useMyQuery';
import NotExistsLayout from '@/components/templates/NotExistsLayout';
import CommunityCard from '@/components/molecules/CommunityCard';
import useScroll from '@/hooks/useScroll';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

// TODO : 게시글 링크 연결 필요
const MyCommunityCardList = () => {
  const userId = useAuthStore((state) => state.userInfo?.userId);
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
