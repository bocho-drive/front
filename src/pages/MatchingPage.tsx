import { useAuth } from '@/@features/Auth/useAuth';
import { MatchingCardInfiniteList } from '@/@features/Matching/components/MatchingCardList';
import DriveLayout from '@/components/templates/DriveLayout';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import * as S from '@/styles/index.style';
import { Link } from 'react-router-dom';

const MatchingPage = () => {
  const userRole = useAuth((state) => state.userRole);
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.div.Row $between $align="center">
          <S.div.Column $gap={10} style={{ flex: 1 }}>
            <S.h.LayoutTitle>운전메이트 매칭 🚘</S.h.LayoutTitle>
            <S.p.P>연수에 도움을 줄 사람들을 찾아보세요</S.p.P>
          </S.div.Column>
          {userRole === 'USER' && (
            <Link to="/matching/new">
              <S.button.Button $colors="primary">매칭 글 작성</S.button.Button>
            </Link>
          )}
        </S.div.Row>

        <S.div.Column $gap={20}>
          <ErrorSuspenseLayout>
            <MatchingCardInfiniteList />
          </ErrorSuspenseLayout>
        </S.div.Column>
      </S.div.Column>
    </DriveLayout>
  );
};

export default MatchingPage;
