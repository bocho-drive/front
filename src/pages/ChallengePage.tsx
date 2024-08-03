import ChallengeCardList from '@/@features/Challenge/components/ChallengeCardList';
import Loading from '@/components/atoms/Loading';
import DriveLayout from '@/components/templates/DriveLayout';
import Tab from '@/components/templates/Tab/Tab';
import * as S from '@/styles/index.style';
import { Suspense } from 'react';

const ChallengePage = () => {
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.h.LayoutTitle>운전 챌린지 🏆</S.h.LayoutTitle>
        <S.p.P>차근차근 시도를 통해 운전고수에 도전해보세요.</S.p.P>

        <Tab
          tabHeaders={['챌린지']}
          tabBodys={[
            <Suspense fallback={<Loading />}>
              <ChallengeCardList />
            </Suspense>,
          ]}
        />

        {/* <Suspense fallback={<Loading />}>
          <ChallengeCardList />
        </Suspense> */}
      </S.div.Column>
    </DriveLayout>
  );
};

export default ChallengePage;
