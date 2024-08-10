import * as S from '@/styles/index.style';
import { useMatchingApplyDeleteMutation } from '../useMatchingApplyQuery';
import { MatchingApply } from '../type';
import { useMatchingStore } from '../../Matching/useMatchingStore';
import { useChatContainerStore } from '@/@features/Chat/useChatContainerStore';
import { useAuthStore } from '@/@features/Auth/useAuthStore';

interface Props {
  apply: MatchingApply;
}

const ApplyCard = ({ apply }: Props) => {
  const userId = useAuthStore((state) => state.userInfo?.userId);
  const [isAuthor] = useMatchingStore((state) => [state.isAuthor]);
  const handleChatContainerOpen = useChatContainerStore((state) => state.handleChatContainerOpen);

  const deleteApplyMutation = useMatchingApplyDeleteMutation();

  const handleDeleteApply = (applyId: number) => {
    if (confirm('지원을 취소하시겠습니까?')) {
      deleteApplyMutation.mutate(applyId);
    }
  };

  const handleOpenChat = () => {
    handleChatContainerOpen(true, apply);
  };

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
