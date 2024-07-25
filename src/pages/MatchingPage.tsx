import MatchingCard from '@/components/molecules/MatchingCard';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';

const MatchingPage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.h.H1>🚘 운전연수 매칭</S.h.H1>
        <S.p.P>연수에 도움을 줄 사람들을 찾아보세요</S.p.P>

        <S.div.Row $gap={20} $wrap>
          <MatchingCard id={1} />
          <MatchingCard id={2} />
          <MatchingCard id={3} />
          <MatchingCard id={4} />
        </S.div.Row>
      </S.div.Column>
    </DriveLayout>
  );
};

export default MatchingPage;
