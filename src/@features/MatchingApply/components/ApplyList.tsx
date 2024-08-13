import * as S from '@/styles/index.style';
import { useMatchingApplySuspenseQuery } from '../useMatchingApplyQuery';
import { MatchingApply } from '../type';
import ApplyCard from './ApplyCard';
import ChatContainer from '@/@features/Chat/components/ChatContainer';

interface Props {
  matchingId: number;
}

const ApplyList = ({ matchingId }: Props) => {
  const { data } = useMatchingApplySuspenseQuery(matchingId);

  return (
    <S.div.Column $gap={10}>
      {data.length === 0 && <S.h.H5>신청자가 없습니다.</S.h.H5>}
      {data.map((apply: MatchingApply) => (
        <ApplyCard key={apply.id} apply={apply} />
      ))}
      <ChatContainer />
    </S.div.Column>
  );
};

export default ApplyList;
