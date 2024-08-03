import { CATEGORY } from '@/@features/Community/type';
import CommunityCardList from '@/components/organisms/CommunityCardList';
import DriveLayout from '@/components/templates/DriveLayout';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import * as S from '@/styles/index.style';

const TipPage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.div.Row $between $align="center">
          <S.div.Column $gap={10} style={{ flex: 1 }}>
            <S.h.LayoutTitle>운전 팁 📌</S.h.LayoutTitle>
            <S.p.P>운전에 도움이 되는 정보를 공유해보세요</S.p.P>
          </S.div.Column>
          <S.button.Button $colors="primary">내 TIP공유</S.button.Button>
        </S.div.Row>

        <ErrorSuspenseLayout>
          <CommunityCardList category={CATEGORY.TIP} />
        </ErrorSuspenseLayout>
      </S.div.Column>
    </DriveLayout>
  );
};

export default TipPage;
