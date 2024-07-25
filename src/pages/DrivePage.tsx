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
            <ChallengeCard id={1} />
            <ChallengeCard id={2} />
            <ChallengeCard id={3} />
            <ChallengeCard id={4} />
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.H2>운전 연수 매칭</S.h.H2>
          <S.div.Row $gap={10} $wrap $itemMaxWidth={300}>
            <MatchingCard id={1} />
            <MatchingCard id={2} />
            <MatchingCard id={31} />
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.H2>운전 팁 공유</S.h.H2>
          <S.div.Row $gap={10} $wrap $itemMaxWidth={500}>
            <TipCard id={1} />
            <TipCard id={2} />
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.H2>운전 Shorts</S.h.H2>
          <S.div.Row $gap={10} $wrap $itemMaxWidth={300}>
            <VideoCard id={1} />
            <VideoCard id={2} />
            <VideoCard id={3} />
          </S.div.Row>
        </S.div.Column>
      </S.div.Column>
    </DriveLayout>
  );
};

export default DrivePage;
