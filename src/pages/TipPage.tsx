import TipCard from '@/components/molecules/TipCard';
import DriveLayout from '@/components/templates/DriveLayout';
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

        <TipCard id={1} />
        <TipCard id={1} />
      </S.div.Column>
    </DriveLayout>
  );
};

export default TipPage;
