import * as S from '@/styles/index.style';
import ChallengeCard from '@/components/molecules/ChallengeCard';
import MatchingCard from '@/components/molecules/MatchingCard';
import TipCard from '@/components/molecules/TipCard';
import VideoCard from '@/components/molecules/VideoCard';
import HeaderFooterLayout from '@/components/templates/HeaderFooterLayout';
import CommunityCommentCard from '@/components/organisms/CommunityCommentCard';

const LandingPage = () => {
  return (
    <HeaderFooterLayout>
      <S.div.Column $gap={100}>
        <S.div.Column $gap={20}>
          <S.h.H1>커뮤니티에서 만나요</S.h.H1>
          <S.div.Row $gap={20}>
            <CommunityCommentCard />
            <CommunityCommentCard />
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.H1>운전고수가 되기 위해 도전해봐요</S.h.H1>
          <S.div.Grid $repeat={3}>
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
          </S.div.Grid>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.H1>운전 메이트를 찾아봐요</S.h.H1>
          <S.div.Row $gap={10}>
            <MatchingCard />
            <MatchingCard />
            <MatchingCard />
            <MatchingCard />
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.H1>인증된 팁을 공유드려요</S.h.H1>
          <S.div.Grid $repeat={2}>
            <TipCard />
            <TipCard />
            <TipCard />
            <TipCard />
          </S.div.Grid>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.H1>영상으로 운전을 배워봐요</S.h.H1>
          <S.div.Row $gap={20} $between>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </S.div.Row>
        </S.div.Column>
      </S.div.Column>
    </HeaderFooterLayout>
  );
};

export default LandingPage;
