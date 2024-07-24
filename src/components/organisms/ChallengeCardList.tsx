import * as S from '@/styles/index.style';
import ChallengeCard from '../molecules/ChallengeCard';

const ChallengeCardList = () => {
  return (
    <S.div.Column $gap={20}>
      <ChallengeCard status="CHALLENGING" />
      <ChallengeCard status="CLEAR" />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
    </S.div.Column>
  );
};

export default ChallengeCardList;
