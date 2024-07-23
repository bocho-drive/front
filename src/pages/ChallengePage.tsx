import Portal from '@/components/atoms/Portal/Portal';
import ChallengeCard from '@/components/molecules/ChallengeCard';
import ChallengeModal from '@/components/molecules/ChallengeModal';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';

const ChallengePage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.h.H1>운전 챌린지</S.h.H1>
        <S.p.P>차근차근 시도를 통해 운전고수에 도전해보세요.</S.p.P>

        <S.div.Row $gap={5}>
          <input id="checkClear" type="checkbox" />
          <label htmlFor="checkClear">클리어한 도전</label>
        </S.div.Row>

        <S.div.Column $gap={10}>
          <S.h.H2>1️⃣ 초급</S.h.H2>
          <S.p.P>✅ 5개 중 2개 완료</S.p.P>
        </S.div.Column>
        <ChallengeCard status="CHALLENGING" />
        <ChallengeCard status="CLEAR" />

        <S.div.Column $gap={10}>
          <S.h.H2>2️⃣ 중급</S.h.H2>
          <S.p.P>✅ 5개 중 2개 완료</S.p.P>
        </S.div.Column>
        <ChallengeCard />
        <ChallengeCard />

        <S.div.Column $gap={10}>
          <S.h.H2>3️⃣ 고급</S.h.H2>
          <S.p.P>✅ 5개 중 2개 완료</S.p.P>
        </S.div.Column>
        <ChallengeCard />
        <ChallengeCard />
      </S.div.Column>

      <Portal>
        <ChallengeModal />
      </Portal>
    </DriveLayout>
  );
};

export default ChallengePage;
