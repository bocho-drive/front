import * as S from '@/styles/index.style';
import { useMatchingStatusPutMutation } from '../useMatchingQuery';
import { Matching } from '../type';

interface Props {
  matching: Matching;
}

const MatchingStatusCard = ({ matching }: Props) => {
  const putStatusMutation = useMatchingStatusPutMutation(matching.id);

  const handleCancelMatching = () => {
    if (confirm('매칭을 취소하시겠습니까?')) {
      putStatusMutation.mutate({
        status: 'CANCEL',
      });
    }
  };

  const handleCompleteMatching = () => {
    if (confirm('매칭을 완료하시겠습니까?')) {
      putStatusMutation.mutate({
        status: 'CLEAR',
      });
    }
  };
  return (
    <S.div.Row $gap={10} $justify="center">
      {matching.status !== 'CANCEL' && (
        <S.button.Button $colors="warning" onClick={handleCancelMatching}>
          매칭취소하기
        </S.button.Button>
      )}
      {matching.status === 'PROGRESS' && (
        <S.button.Button $colors="secondary" onClick={handleCompleteMatching}>
          매칭완료
        </S.button.Button>
      )}
    </S.div.Row>
  );
};

export default MatchingStatusCard;
