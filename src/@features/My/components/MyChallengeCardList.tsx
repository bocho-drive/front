import { useMyChallengeVerifyListInfiniteQuery } from '../useMyQuery';
import NotExistsLayout from '@/components/templates/NotExistsLayout';
import useScroll from '@/hooks/useScroll';
import CommunityCard from '@/components/molecules/CommunityCard';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

// TODO 추가 구현 필요 : 카드 링크 연결
const MyChallengeVerifyCardList = () => {
  const userId = useAuthStore((state) => state.userInfo?.userId);
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
