import * as S from '@/styles/index.style';
import { useMatchingApplyDeleteMutation } from '../useMatchingApplyQuery';
import { MatchingApply } from '../type';
import { useMatchingStore } from '../../Matching/useMatchingStore';
import { useChatContainerStore } from '@/@features/Chat/useChatContainerStore';
import { useAuthStore } from '@/@features/Auth/useAuthStore';
import { useMatchingStatusPutMutation } from '@/@features/Matching/useMatchingQuery';

interface Props {
  apply: MatchingApply;
}

const ApplyCard = ({ apply }: Props) => {
  const userId = useAuthStore((state) => state.userInfo?.userId);
  const matching = useMatchingStore((state) => state.matching);
  const handleChatContainerOpen = useChatContainerStore((state) => state.handleChatContainerOpen);

  const deleteApplyMutation = useMatchingApplyDeleteMutation();
  const matchingStatusPutMutation = useMatchingStatusPutMutation(apply.driveMatchingId);

  const handleDeleteApply = (applyId: number) => {
    if (confirm('지원을 취소하시겠습니까?')) {
      deleteApplyMutation.mutate(applyId);
    }
  };

  const handleOpenChat = () => {
    handleChatContainerOpen(true, apply);
  };

  const handleMatching = () => {
    if (confirm('매칭을 진행하시겠습니까?')) {
      matchingStatusPutMutation.mutate({
        status: 'PROGRESS',
        applyUserId: apply.userId,
      });
    }
  };

  const isAuthor = matching?.studentId === userId;
  const isMyApply = apply.userId === userId;

  return (
    <S.div.Card>
      {matching?.teacherUserId === apply.userId && <S.span.Badge>매칭중</S.span.Badge>}
      <S.div.Row $between $align="center">
        <S.h.H5>{apply.nickname}</S.h.H5>
        <S.div.Row $gap={10}>
          {(isAuthor || isMyApply) && (
            <S.button.Button $size="small" onClick={handleOpenChat}>
              채팅하기
            </S.button.Button>
          )}
          {isMyApply && (
            <S.button.Button $size="small" $colors="warning" onClick={() => handleDeleteApply(apply.id)}>
              지원 취소
            </S.button.Button>
          )}
          {isAuthor && (
            <S.button.Button $size="small" $colors="primary" onClick={handleMatching}>
              매칭하기
            </S.button.Button>
          )}
        </S.div.Row>
      </S.div.Row>
    </S.div.Card>
  );
};

export default ApplyCard;
