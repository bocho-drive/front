import * as S from '@/styles/index.style';
import { useMatchingApplyPostMutation } from '../useMatchingApplyQuery';

interface Props {
  matchingId: number;
}

const ApplyButton = ({ matchingId }: Props) => {
  const postMutation = useMatchingApplyPostMutation();

  const handleApply = () => {
    if (confirm('매칭을 신청하시겠습니까?')) {
      postMutation.mutate(matchingId);
    }
  };

  return (
    <S.div.Row $gap={10} $justify="center">
      <S.button.Button onClick={handleApply}>매칭 신청하기</S.button.Button>
    </S.div.Row>
  );
};

export default ApplyButton;
