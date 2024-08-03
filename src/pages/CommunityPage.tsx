import CommunityCardList from '@/components/organisms/CommunityCardList';
import CommunityLayout from '@/components/templates/CommunityLayout/CommunityLayout';
import { useCommunityCategory } from '@/components/templates/CommunityLayout/useCommunityCategory';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import * as S from '@/styles/index.style';

const CommunityPage = () => {
  const category = useCommunityCategory((state) => state.category);
  return (
    <CommunityLayout>
      <S.div.Column $gap={20}>
        <S.h.LayoutTitle>커뮤니티에서 만나요 💬</S.h.LayoutTitle>
        <ErrorSuspenseLayout>
          <CommunityCardList category={category} />
        </ErrorSuspenseLayout>
      </S.div.Column>
    </CommunityLayout>
  );
};

export default CommunityPage;
