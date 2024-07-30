import CommunityCardList from '@/components/organisms/CommunityCardList';
import CommunityLayout from '@/components/templates/CommunityLayout';
import * as S from '@/styles/index.style';

const CommunityPage = () => {
  return (
    <CommunityLayout>
      <S.div.Column $gap={20}>
        <S.h.LayoutTitle>커뮤니티에서 만나요 💬</S.h.LayoutTitle>
        <S.input.Input $size="large" placeholder="Search" />

        <CommunityCardList />
      </S.div.Column>
    </CommunityLayout>
  );
};

export default CommunityPage;
