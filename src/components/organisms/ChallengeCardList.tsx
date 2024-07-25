import * as S from '@/styles/index.style';
import ChallengeCard from '../molecules/ChallengeCard';

const ChallengeCardList = () => {
  return (
    <S.div.Column $gap={20}>
      <ChallengeCard id={1} status="CHALLENGING" />
      <ChallengeCard id={1} status="CLEAR" />
      <ChallengeCard id={1} />
      <ChallengeCard id={1} />
      <ChallengeCard id={1} />
      <ChallengeCard id={1} />
      <ChallengeCard id={1} />
      <ChallengeCard id={1} />
    </S.div.Column>
  );
};

export default ChallengeCardList;
