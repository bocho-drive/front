import ChallengeCard from '@/components/molecules/ChallengeCard';
import MatchingCard from '@/components/molecules/MatchingCard';
import TipCard from '@/components/molecules/TipCard';
import VideoCard from '@/components/molecules/VideoCard';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';

const DrivePage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={50}>
        <S.div.Column $gap={10}>
          <S.h.H2>운전 챌린지</S.h.H2>
          <S.div.Row $gap={10} $wrap>
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.H2>운전 연수 매칭</S.h.H2>
          <S.div.Row $gap={10} $wrap $itemMaxWidth={300}>
            <MatchingCard />
            <MatchingCard />
            <MatchingCard />
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.H2>운전 팁 공유</S.h.H2>
          <S.div.Row $gap={10} $wrap $itemMaxWidth={500}>
            <TipCard />
            <TipCard />
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.H2>운전 Shorts</S.h.H2>
          <S.div.Row $gap={10} $wrap $itemMaxWidth={300}>
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </S.div.Row>
        </S.div.Column>
      </S.div.Column>
    </DriveLayout>
  );
};

export default DrivePage;
