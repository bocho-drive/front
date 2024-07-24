import * as S from '@/styles/index.style';
import ChallengeCard from '@/components/molecules/ChallengeCard';
import MatchingCard from '@/components/molecules/MatchingCard';
import TipCard from '@/components/molecules/TipCard';
import VideoCard from '@/components/molecules/VideoCard';
import HeaderFooterLayout from '@/components/templates/HeaderFooterLayout';
import CommunityCommentCard from '@/components/organisms/CommunityCommentCard';
import MoreLayout from '@/components/templates/MoreLayout';

const LandingPage = () => {
  return (
    <HeaderFooterLayout>
      <S.div.Column $gap={100}>
        <S.div.Column $gap={20}>
          <S.h.H1>커뮤니티에서 만나요 💬</S.h.H1>
          <S.div.Row $gap={20} $itemMaxWidth={600} $wrap>
            <CommunityCommentCard id={1} />
            <CommunityCommentCard id={2} />
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.H1>운전고수가 되기 위해 도전해봐요 🏆</S.h.H1>
          <MoreLayout to="/challenge">
            <S.div.Row $gap={10} $itemMinWidth={400} $itemMaxWidth={150} $wrap>
              <ChallengeCard id={1} />
              <ChallengeCard id={2} />
              <ChallengeCard id={3} />
              <ChallengeCard id={4} />
              <ChallengeCard id={5} />
              <ChallengeCard id={6} />
            </S.div.Row>
          </MoreLayout>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.H1>운전 메이트를 찾아봐요 🚘</S.h.H1>
          <MoreLayout to="/matching">
            <S.div.Row $gap={10} $overflow="scroll" $itemMaxWidth={300}>
              <MatchingCard id={1} />
              <MatchingCard id={2} />
              <MatchingCard id={3} />
              <MatchingCard id={1} />
            </S.div.Row>
          </MoreLayout>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.H1>인증된 팁을 공유드려요</S.h.H1>

          <S.div.Row $gap={10} $itemMaxWidth={600} $wrap>
            <TipCard id={1} />
            <TipCard id={1} />
            <TipCard id={1} />
            <TipCard id={1} />
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={20}>
          <S.h.H1>영상으로 운전을 배워봐요</S.h.H1>
          <S.div.Row $gap={20} $overflow="scroll" $itemMaxWidth={300}>
            <VideoCard id={11} />
            <VideoCard id={12} />
            <VideoCard id={13} />
            <VideoCard id={14} />
            <VideoCard id={15} />
            <VideoCard id={16} />
          </S.div.Row>
        </S.div.Column>
      </S.div.Column>
    </HeaderFooterLayout>
  );
};

export default LandingPage;
