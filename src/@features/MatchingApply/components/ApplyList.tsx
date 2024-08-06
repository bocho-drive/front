import * as S from '@/styles/index.style';
import { useMatchingApplyDeleteMutation, useMatchingApplySuspenseQuery } from '../useMatchingApplyQuery';
import { MatchingApply } from '../type';
import { useAuth } from '@/@features/Auth/useAuth';

interface Props {
  matchingId: number;
}

const ApplyList = ({ matchingId }: Props) => {
  const userId = useAuth((state) => state.userId);

  const { data } = useMatchingApplySuspenseQuery(matchingId);

  const deleteApplyMutation = useMatchingApplyDeleteMutation();

  const handleDeleteApply = (applyId: number) => {
    if (confirm('지원을 취소하시겠습니까?')) {
      deleteApplyMutation.mutate(applyId);
    }
  };

  return (
    <S.div.Column $gap={10}>
      {data && data.length === 0 && <S.h.H5>신청자가 없습니다.</S.h.H5>}
      {data.map((apply: MatchingApply) => {
        return (
          <S.div.Card>
            <S.div.Row $between $align="center">
              <S.h.H5>{apply.nickname}</S.h.H5>
              {apply.userId === userId && (
                <S.button.Button $size="small" $colors="warning" onClick={() => handleDeleteApply(apply.id)}>
                  지원 취소
                </S.button.Button>
              )}
            </S.div.Row>
          </S.div.Card>
        );
      })}
    </S.div.Column>
  );
};

export default ApplyList;
