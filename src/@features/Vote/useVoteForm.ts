import { errorToast } from '@/components/atoms/Toast/useToast';
import { useVoteDeleteMutation, useVotePostMutation } from './useVoteQuery';
import { useEffect, useReducer } from 'react';
import { voteInitialState, voteReducer } from './reducer';
import { UseSuspenseQueryResult } from '@tanstack/react-query';
import { Vote } from './type';
import { useAuth } from '../Auth/useAuth';

interface Props {
  communityId: number;
  voteQuery: UseSuspenseQueryResult<Vote[]>;
}

interface Return {
  handleVote: () => void;
  handleCancelVote: () => void;
  handleVoteSelect: (agreeYn: boolean) => void;
  voteState: typeof voteInitialState;
}

export const useVoteForm = ({ communityId, voteQuery }: Props): Return => {
  const [voteState, voteDispatch] = useReducer(voteReducer, voteInitialState);

  const postVoteMutation = useVotePostMutation();
  const deleteVoteMutation = useVoteDeleteMutation();

  const { isAuth, userId } = useAuth((state) => ({
    isAuth: state.isAuth,
    userId: state.loginInfo?.userId,
  }));

  const handleVote = () => {
    if (!voteState.isUp && !voteState.isDown) {
      errorToast('투표를 선택해주세요.');
      return;
    }
    postVoteMutation.mutate(
      { communityId, agreeYn: voteState.isUp },
      {
        onSuccess: () => voteQuery.refetch(),
      }
    );
  };

  const handleCancelVote = () => {
    if (!voteState.voteInfo) return;

    deleteVoteMutation.mutate(voteState.voteInfo.id, { onSuccess: () => voteQuery.refetch() });
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

  return {
    handleCancelVote,
    handleVote,
    handleVoteSelect,
    voteState,
  };
};
