import ChallengeCardList from '@/@features/Challenge/components/ChallengeCardList';
import Loading from '@/components/atoms/Loading';
import DriveLayout from '@/components/templates/DriveLayout';
import * as S from '@/styles/index.style';
import { Suspense } from 'react';

const ChallengePage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.h.LayoutTitle>운전 챌린지 🏆</S.h.LayoutTitle>
        <S.p.P>차근차근 시도를 통해 운전고수에 도전해보세요.</S.p.P>

        <S.div.Row $gap={5}>
          <input id="checkClear" type="checkbox" />
          <label htmlFor="checkClear">클리어한 도전</label>
        </S.div.Row>

        <Suspense fallback={<Loading />}>
          <ChallengeCardList />
        </Suspense>

        {/* <S.div.Column $gap={10}>
          <S.h.H2>1️⃣ 초급</S.h.H2>
          <S.p.P>✅ 5개 중 2개 완료</S.p.P>
        </S.div.Column>
        <ChallengeCard id={1} status="CHALLENGING" />
        <ChallengeCard id={2} status="CLEAR" />

        <S.div.Column $gap={10}>
          <S.h.H2>2️⃣ 중급</S.h.H2>
          <S.p.P>✅ 5개 중 2개 완료</S.p.P>
        </S.div.Column>
        <ChallengeCard id={3} />
        <ChallengeCard id={4} />

        <S.div.Column $gap={10}>
          <S.h.H2>3️⃣ 고급</S.h.H2>
          <S.p.P>✅ 5개 중 2개 완료</S.p.P>
        </S.div.Column>
        <ChallengeCard id={5} />
        <ChallengeCard id={6} /> */}
      </S.div.Column>
    </DriveLayout>
  );
};

export default ChallengePage;
