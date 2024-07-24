import MatchingRowCard from '@/components/molecules/MatchingRowCard';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';

const MatchingPage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.h.H1>🚘 운전연수 매칭</S.h.H1>
        <S.p.P>연수에 도움을 줄 사람들을 찾아보세요</S.p.P>

        <S.div.Column $gap={20}>
          <MatchingRowCard />
          <MatchingRowCard />
        </S.div.Column>
      </S.div.Column>
    </DriveLayout>
  );
};

export default MatchingPage;
