import { useAuth } from '@/@features/Auth/useAuth';
import { useMyChallengeVerifyListInfiniteQuery } from '../useMyQuery';
import NotExistsLayout from '@/components/templates/NotExistsLayout';
import useScroll from '@/hooks/useScroll';
import CommunityCard from '@/components/molecules/CommunityCard';

const MyChallengeVerifyCardList = () => {
  const userId = useAuth((state) => state.userId);
  const { data, fetchNextPage, hasNextPage } = useMyChallengeVerifyListInfiniteQuery(userId!);
  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });

  return (
    <NotExistsLayout isExists={data.pages.length > 0}>
      {data.pages.map((page) =>
        page.content.map((verify) => {
          return <CommunityCard key={verify.id} data={verify} />;
        })
      )}
    </NotExistsLayout>
  );
};

export default MyChallengeVerifyCardList;
