import * as S from '@/styles/index.style';
import VoteButton from './VoteButton';
import styled from 'styled-components';
import { useEffect, useReducer } from 'react';
import { useAuth } from '@/@features/Auth/useAuth';
import { errorToast } from '@/components/atoms/Toast/useToast';
import { useVoteQuery } from '../useVoteQuery';
import { Vote } from '../type';

interface Props {
  communityId: number;
}

const VoteForm = ({ communityId }: Props) => {
  const { voteList, postVoteMutation, deleteVoteMutation } = useVoteQuery(communityId);

  const up = voteList.filter((vote) => vote.agreeYn).length;
  const down = voteList.length - up;

  const isAuth = useAuth((state) => state.isAuth);
  const userId = useAuth((state) => state.userId);

  const [voteState, voteDispatch] = useReducer(voteReducer, {
    isVoteAble: true,
    isUp: false,
    isDown: false,
    voteInfo: null,
  });

  const handleVote = () => {
    if (!voteState.isUp && !voteState.isDown) {
      errorToast('투표를 선택해주세요.');
      return;
    }
    postVoteMutation.mutate({ communityId, agreeYn: voteState.isUp });
  };

  const handleCancelVote = () => {
    if (!voteState.voteInfo) return;

    deleteVoteMutation.mutate(voteState.voteInfo.id);
  };

  useEffect(() => {
    const voteInfo: Vote | null = voteList.find((vote) => vote.userId === userId) || null;

    if (voteInfo) {
      voteDispatch({ type: 'VOTED', payload: { voteInfo } });
    } else {
      voteDispatch({ type: 'RESET_VOTE' });
    }
  }, [isAuth, userId, voteList]);

  return (
    <S.div.Card>
      <S.div.Column $gap={20} $align="center">
        <S.div.Column $align="center">
          <S.h.H3>투표</S.h.H3>
          <S.p.P>{voteList.length}명 참여</S.p.P>
        </S.div.Column>
        <S.div.Row $gap={20}>
          <VoteCard $isActive={voteState.isUp} onClick={() => voteDispatch({ type: 'SELECT_VOTE', payload: { agreeYn: true } })}>
            <VoteButton type="up" count={up} />
          </VoteCard>
          <VoteCard $isActive={voteState.isDown} onClick={() => voteDispatch({ type: 'SELECT_VOTE', payload: { agreeYn: false } })}>
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

interface VoteState {
  isVoteAble: boolean;
  isUp: boolean;
  isDown: boolean;
  voteInfo: Vote | null;
}
interface VoteAction {
  type: 'SELECT_VOTE';
  payload: { agreeYn: boolean };
}
interface VotedAction {
  type: 'VOTED';
  payload: { voteInfo: Vote };
}
interface ResetAction {
  type: 'RESET_VOTE';
}

const voteReducer = (state: VoteState, action: VoteAction | VotedAction | ResetAction) => {
  switch (action.type) {
    case 'SELECT_VOTE':
      if (!state.isVoteAble) {
        errorToast('투표 권한이 없습니다.');
        return state;
      }
      return {
        ...state,
        isUp: action.payload.agreeYn,
        isDown: !action.payload.agreeYn,
      };

    case 'VOTED':
      return {
        ...state,
        isVoteAble: false,
        isUp: action.payload.voteInfo.agreeYn,
        isDown: !action.payload.voteInfo.agreeYn,
        voteInfo: action.payload.voteInfo,
      };

    case 'RESET_VOTE':
      return {
        isVoteAble: true,
        isUp: false,
        isDown: false,
        voteInfo: null,
      };
    default:
      return state;
  }
};

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
