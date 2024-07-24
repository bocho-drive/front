import * as S from '@/styles/index.style';
import CommunityCard from '../molecules/CommunityCard';

const CommunityCardList = () => {
  return (
    <S.div.Column $gap={20}>
      <CommunityCard id={1} />
      <CommunityCard id={1} />
      <CommunityCard id={1} />
      <CommunityCard id={1} />
      <CommunityCard id={1} />
    </S.div.Column>
  );
};

export default CommunityCardList;
