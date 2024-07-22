import * as S from '@/styles/index.style';
import Header from '@/components/molecules/Header';
import PostCard from '@/components/organisms/PostCard';

const LandingPage = () => {
  return (
    <S.div.Container>
      <Header />

      <S.div.Column $gap={20} $width={80}>
        <S.h.h1>커뮤니티에서 만나요</S.h.h1>
        <S.div.Row $gap={20}>
          <PostCard />
          <PostCard />
        </S.div.Row>
        <S.h.h1>운전고수가 되기 위해 도전해봐요</S.h.h1>
        <S.h.h1>운전 메이트를 찾아봐요</S.h.h1>
        <S.h.h1>인증된 팁을 공유드려요</S.h.h1>
        <S.h.h1>영상으로 운전을 배워봐요</S.h.h1>
      </S.div.Column>
    </S.div.Container>
  );
};

export default LandingPage;
