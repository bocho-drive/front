import { ChallengeCardList } from '@/@features/Challenge/components/ChallengeCardList';
import { CommunityCardList } from '@/@features/Community/components/CommunityCardList';
import { MatchingCardList } from '@/@features/Matching/components/MatchingCardList';
import { VideoCardList } from '@/@features/Video/components/VideoCardList';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';

const DrivePage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={50}>
        <S.div.Column $gap={10}>
          <S.h.LayoutTitle>운전 챌린지 🏆</S.h.LayoutTitle>
          <S.div.Grid $repeat={2}>
            <ChallengeCardList />
          </S.div.Grid>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.LayoutTitle>운전 메이트 매칭 🚘</S.h.LayoutTitle>
          <S.div.Grid $repeat={3}>
            <MatchingCardList />
          </S.div.Grid>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.LayoutTitle>운전 팁 공유 📌</S.h.LayoutTitle>
          <S.div.Grid $repeat={1}>
            <CommunityCardList category="TIP" />
          </S.div.Grid>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.LayoutTitle>운전 Shorts 🎥</S.h.LayoutTitle>
          <S.div.Grid $repeat={3}>
            <VideoCardList />
          </S.div.Grid>
        </S.div.Column>
      </S.div.Column>
    </DriveLayout>
  );
};

export default DrivePage;
