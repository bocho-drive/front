import TipCard from '@/components/molecules/TipCard';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';

const TipPage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.div.Row $between $align="center">
          <S.div.Column $gap={10}>
            <S.h.H1>운전 팁</S.h.H1>
            <S.p.P>운전에 도움이 되는 정보를 공유해보세요</S.p.P>
          </S.div.Column>
          <S.button.Button>내 TIP공유</S.button.Button>
        </S.div.Row>

        <TipCard />
        <TipCard />
      </S.div.Column>
    </DriveLayout>
  );
};

export default TipPage;
