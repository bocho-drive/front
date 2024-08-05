import MatchingCardList from '@/@features/Matching/components/MatchingCardList';
import DriveLayout from '@/components/templates/DriveLayout';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import * as S from '@/styles/index.style';

const MatchingPage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.h.LayoutTitle>운전메이트 매칭 🚘</S.h.LayoutTitle>
        <S.p.P>연수에 도움을 줄 사람들을 찾아보세요</S.p.P>

        <S.div.Column $gap={20}>
          <ErrorSuspenseLayout>
            <MatchingCardList />
          </ErrorSuspenseLayout>
        </S.div.Column>
      </S.div.Column>
    </DriveLayout>
  );
};

export default MatchingPage;
