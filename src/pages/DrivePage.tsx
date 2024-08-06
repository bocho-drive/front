import { MatchingCardList } from '@/@features/Matching/components/MatchingCardList';
import TipCard from '@/components/molecules/TipCard';
import DriveLayout from '@/components/templates/DriveLayout';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import * as S from '@/styles/index.style';

const DrivePage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={50}>
        <S.div.Column $gap={10}>
          <S.h.LayoutTitle>운전 챌린지 🏆</S.h.LayoutTitle>
          <S.div.Row $gap={20} $overflow="scroll" $itemMinWidth={400}></S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.LayoutTitle>운전 메이트 매칭 🚘</S.h.LayoutTitle>
          <S.div.Row $gap={20} $overflow="scroll">
            <ErrorSuspenseLayout>
              <MatchingCardList />
            </ErrorSuspenseLayout>
          </S.div.Row>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.LayoutTitle>운전 팁 공유 📌</S.h.LayoutTitle>
          <S.div.Grid $repeat={1}>
            <TipCard id={1} />
            <TipCard id={2} />
          </S.div.Grid>
        </S.div.Column>

        <S.div.Column $gap={10}>
          <S.h.LayoutTitle>운전 Shorts 🎥</S.h.LayoutTitle>
          <S.div.Row $gap={10} $overflow="scroll">
            {/* <VideoCard id={1} />
            <VideoCard id={2} />
            <VideoCard id={3} /> */}
          </S.div.Row>
        </S.div.Column>
      </S.div.Column>
    </DriveLayout>
  );
};

export default DrivePage;
