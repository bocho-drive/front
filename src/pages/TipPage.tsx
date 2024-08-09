import { CATEGORY } from '@/@features/Community/type';
import CommunityCardInfiniteList from '@/@features/Community/components/CommunityCardList';
import DriveLayout from '@/components/templates/DriveLayout';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import * as S from '@/styles/index.style';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

const TipPage = () => {
  const confirmAuth = useAuthStore((state) => state.confirmAuth);
  const navigate = useNavigate();

  const handleToNew = () => {
    if (confirmAuth()) {
      navigate('/tip/new');
    }
  };
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.div.Row $between $align="center">
          <S.div.Column $gap={10} style={{ flex: 1 }}>
            <S.h.LayoutTitle>운전 팁 📌</S.h.LayoutTitle>
            <S.p.P>운전에 도움이 되는 정보를 공유해보세요</S.p.P>
          </S.div.Column>
          <S.button.Button $colors="primary" onClick={handleToNew}>
            내 TIP공유
          </S.button.Button>
        </S.div.Row>

        <ErrorSuspenseLayout>
          <CommunityCardInfiniteList category={CATEGORY.TIP} />
        </ErrorSuspenseLayout>
      </S.div.Column>
    </DriveLayout>
  );
};

export default TipPage;
