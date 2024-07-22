import CommunityCard from '@/components/molecules/CommunityCard';
import HeaderFooterLayout from '@/components/templates/HeaderFooterLayout';
import * as S from '@/styles/index.style';

const CommunityPage = () => {
  return (
    <HeaderFooterLayout>
      <S.div.Column $width={80}>
        <S.div.Row $gap={50} $align="flex-start">
          <S.div.Column $width={70} $gap={20}>
            <S.h.h1>커뮤니티에서 만나요</S.h.h1>
            <S.input.Input $size="large" placeholder="Search" />

            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </S.div.Column>

          <S.div.Column $width={30} $gap={10}>
            <S.button.Button>글쓰기</S.button.Button>
            <S.button.Button>최신 게시글</S.button.Button>
            <S.button.Button>인기 게시글</S.button.Button>
            <S.button.Button>투표 게시글</S.button.Button>
          </S.div.Column>
        </S.div.Row>
      </S.div.Column>
    </HeaderFooterLayout>
  );
};

export default CommunityPage;
