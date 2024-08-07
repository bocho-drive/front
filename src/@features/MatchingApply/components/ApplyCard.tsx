import * as S from '@/styles/index.style';
import { useMatchingApplyDeleteMutation } from '../useMatchingApplyQuery';
import { MatchingApply } from '../type';
import { useAuth } from '@/@features/Auth/useAuth';
import { useApplyStore } from '../useApplyStore';
import { useChatStore } from '@/@features/Chat/useChatStore';

interface Props {
  apply: MatchingApply;
}

const ApplyCard = ({ apply }: Props) => {
  const isAuthor = useApplyStore((state) => state.isAuthor);
  const userId = useAuth((state) => state.loginInfo?.userId);
  const setIsOpen = useChatStore((state) => state.setIsOpen);

  const deleteApplyMutation = useMatchingApplyDeleteMutation();

  const handleDeleteApply = (applyId: number) => {
    if (confirm('지원을 취소하시겠습니까?')) {
      deleteApplyMutation.mutate(applyId);
    }
  };

  const handleOpenChat = () => setIsOpen(true);

  const isMyApply = apply.userId === userId;

  return (
    <S.div.Card>
      <S.div.Row $between $align="center">
        <S.h.H5>{apply.nickname}</S.h.H5>
        <S.div.Row $gap={10}>
          {isMyApply && (
            <S.button.Button $size="small" $colors="warning" onClick={() => handleDeleteApply(apply.id)}>
              지원 취소
            </S.button.Button>
          )}
          {(isAuthor || isMyApply) && (
            <S.button.Button $size="small" onClick={handleOpenChat}>
              채팅하기
            </S.button.Button>
          )}
          {isAuthor && (
            <S.button.Button $size="small" $colors="primary">
              매칭하기
            </S.button.Button>
          )}
        </S.div.Row>
      </S.div.Row>
    </S.div.Card>
  );
};

export default ApplyCard;
