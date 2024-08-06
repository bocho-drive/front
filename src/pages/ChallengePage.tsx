import { useAuth } from '@/@features/Auth/useAuth';
import { ChallengeInfiniteCardList } from '@/@features/Challenge/components/ChallengeCardList';
import VerfiesCardList from '@/@features/ChallengeVerifies/components/VerfiesCardList';
import DriveLayout from '@/components/templates/DriveLayout';
import ErrorSuspenseLayout from '@/components/templates/ErrorSuspenseLayout';
import Tab from '@/components/templates/Tab/Tab';
import * as S from '@/styles/index.style';

const ChallengePage = () => {
  const isAuth = useAuth((state) => state.isAuth);

  const Verifies = () => {
    if (!isAuth) return <S.h.H3>로그인이 필요한 페이지입니다.</S.h.H3>;
    return <VerfiesCardList />;
  };
  return (
    <DriveLayout>
      <S.div.Column $gap={20}>
        <S.h.LayoutTitle>운전 챌린지 🏆</S.h.LayoutTitle>
        <S.p.P>차근차근 시도를 통해 운전고수에 도전해보세요.</S.p.P>

        <ErrorSuspenseLayout>
          <Tab tabHeaders={['챌린지', '챌린지 인증']} tabBodys={[<ChallengeInfiniteCardList />, <Verifies />]} />
        </ErrorSuspenseLayout>
      </S.div.Column>
    </DriveLayout>
  );
};

export default ChallengePage;
