import CommunityCard from '@/components/molecules/CommunityCard';
import CommunityLayout from '@/components/templates/CommunityLayout';
import * as S from '@/styles/index.style';

const CommunityPage = () => {
  return (
    <CommunityLayout
      main={
        <S.div.Column $gap={20}>
          <S.h.H1>커뮤니티에서 만나요</S.h.H1>
          <S.input.Input $size="large" placeholder="Search" />

          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </S.div.Column>
      }
    />
  );
};

export default CommunityPage;
