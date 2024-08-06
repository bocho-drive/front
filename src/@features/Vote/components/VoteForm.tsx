import * as S from '@/styles/index.style';
import VoteButton from './VoteButton';
import styled from 'styled-components';
import { useEffect, useReducer } from 'react';
import { useAuth } from '@/@features/Auth/useAuth';
import { errorToast } from '@/components/atoms/Toast/useToast';
import { useVoteDeleteMutation, useVotePostMutation, useVoteSuspenseQuery } from '../useVoteQuery';
import { Vote } from '../type';
import { voteInitialState, voteReducer } from '../reducer';

interface Props {
  communityId: number;
}

const VoteForm = ({ communityId }: Props) => {
  // const { voteList, postVoteMutation, deleteVoteMutation } = useVoteQuery(communityId);
  const voteQuery = useVoteSuspenseQuery(communityId);
  const postVoteMutation = useVotePostMutation();
  const deleteVoteMutation = useVoteDeleteMutation();

  const up = voteQuery.data.filter((vote) => vote.agreeYn).length;
  const down = voteQuery.data.length - up;

  const isAuth = useAuth((state) => state.isAuth);
  const userId = useAuth((state) => state.loginInfo?.userId);

  const [voteState, voteDispatch] = useReducer(voteReducer, voteInitialState);

  const handleVote = async () => {
    if (!voteState.isUp && !voteState.isDown) {
      errorToast('투표를 선택해주세요.');
      return;
    }
    await postVoteMutation.mutateAsync({ communityId, agreeYn: voteState.isUp });
    voteQuery.refetch();
  };

  const handleCancelVote = async () => {
    if (!voteState.voteInfo) return;

    await deleteVoteMutation.mutateAsync(voteState.voteInfo.id);
    voteQuery.refetch();
  };

  const handleVoteSelect = (agreeYn: boolean) => {
    if (!isAuth) {
      errorToast('투표 권한이 없습니다.');
      return;
    }
    if (voteState.isVoteAble) {
      voteDispatch({ type: 'SELECT_VOTE', payload: { agreeYn } });
    }
  };

  useEffect(() => {
    const voteInfo: Vote | null = voteQuery.data.find((vote) => vote.userId === userId) || null;

    if (voteInfo) {
      voteDispatch({ type: 'VOTED', payload: { voteInfo } });
    } else {
      voteDispatch({ type: 'RESET_VOTE' });
    }
  }, [voteQuery.data, userId]);

  return (
    <S.div.Card>
      <S.div.Column $gap={20} $align="center">
        <S.div.Column $align="center">
          <S.h.H3>투표</S.h.H3>
          <S.p.P>{voteQuery.data.length}명 참여</S.p.P>
        </S.div.Column>
        <S.div.Row $gap={20}>
          <VoteCard $isActive={voteState.isUp} onClick={() => handleVoteSelect(true)}>
            <VoteButton type="up" count={up} />
          </VoteCard>
          <VoteCard $isActive={voteState.isDown} onClick={() => handleVoteSelect(false)}>
            <VoteButton type="down" count={down} />
          </VoteCard>
        </S.div.Row>
        {isAuth && voteState.isVoteAble && (
          <S.button.Button $size="small" $colors="primary" onClick={handleVote}>
            투표하기
          </S.button.Button>
        )}
        {isAuth && !voteState.isVoteAble && (
          <S.button.Button $size="small" $colors="primary" onClick={handleCancelVote}>
            투표취소하기
          </S.button.Button>
        )}
      </S.div.Column>
    </S.div.Card>
  );
};

export default VoteForm;

interface VoteCardProps {
  $isActive: boolean;
}

const VoteCard = styled(S.div.Card)<VoteCardProps>`
  background-color: ${({ $isActive }) => $isActive && 'gray'};

  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
  }
`;
