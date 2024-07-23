import ChallengeCard from '@/components/molecules/ChallengeCard';
import MatchingCard from '@/components/molecules/MatchingCard';
import TipCard from '@/components/molecules/TipCard';
import VideoCard from '@/components/molecules/VideoCard';
import HeaderFooterLayout from '@/components/templates/HeaderFooterLayout';
import * as S from '@/styles/index.style';

const DrivePage = () => {
  return (
    <HeaderFooterLayout>
      <S.div.Row $between $width={100}>
        {/* left */}
        <S.div.Column $width={70} $gap={50}>
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
            <S.div.Row $gap={10} $wrap>
              <MatchingCard />
              <MatchingCard />
              <MatchingCard />
            </S.div.Row>
          </S.div.Column>

          <S.div.Column $gap={10}>
            <S.h.H2>운전 팁 공유</S.h.H2>
            <S.div.Row $gap={10} $wrap>
              <TipCard />
              <TipCard />
            </S.div.Row>
          </S.div.Column>

          <S.div.Column $gap={10}>
            <S.h.H2>운전 Shorts</S.h.H2>
            <S.div.Row $gap={10} $wrap>
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </S.div.Row>
          </S.div.Column>
        </S.div.Column>

        {/* right */}
        {/* 90% * 30% = 27% */}
        <S.div.Column $width={27} style={{ position: 'fixed', right: '5%' }}>
          <S.div.Card>
            <S.div.Column $gap={20}>
              <S.div.Row $align="center" $gap={10}>
                <S.div.Avatar />
                <S.h.H4>운전자</S.h.H4>
              </S.div.Row>

              <S.div.Card>
                <S.h.H4>🏆 도전 중인 챌린지</S.h.H4>
              </S.div.Card>
            </S.div.Column>
          </S.div.Card>
        </S.div.Column>
      </S.div.Row>
    </HeaderFooterLayout>
  );
};

export default DrivePage;
