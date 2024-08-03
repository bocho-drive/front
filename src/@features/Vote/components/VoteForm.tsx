import * as S from '@/styles/index.style';
import VoteButton from './VoteButton';
import styled from 'styled-components';
import { useEffect, useReducer } from 'react';
import { useAuth } from '@/@features/Auth/useAuth';
import { errorToast } from '@/components/atoms/Toast/useToast';
import { useVoteQuery } from '../useVoteQuery';

interface Props {
  communityId: number;
}

const VoteForm = ({ communityId }: Props) => {
  const { voteList, postVoteMutation } = useVoteQuery(communityId);

  const up = voteList.filter((vote) => vote.agreeYn).length;
  const down = voteList.length - up;

  const isAuth = useAuth((state) => state.isAuth);
  const userId = useAuth((state) => state.userId);

  const [voteState, voteDispatch] = useReducer(voteReducer, {
    isVoteAble: true,
    isUp: false,
    isDown: false,
  });

  const handleVote = () => {
    if (!voteState.isUp && !voteState.isDown) {
      errorToast('투표를 선택해주세요.');
      return;
    }
    postVoteMutation.mutate({ communityId, agreeYn: voteState.isUp });
  };

  // const handleCancelVote = () => {
  //   deleteVoteMutation.mutate();
  // }

  useEffect(() => {
    voteList.forEach((vote) => {
      if (isAuth && vote.userId === userId) {
        voteDispatch({ type: 'VOTED', payload: { agreeYn: vote.agreeYn } });
      }
    });
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
        {/* {isAuth && !voteState.isVoteAble && (
          <S.button.Button $size="small" $colors="primary" onClick={handleVote}>
            투표취소하기
          </S.button.Button>
        )} */}
      </S.div.Column>
    </S.div.Card>
  );
};

export default VoteForm;

interface VoteState {
  isVoteAble: boolean;
  isUp: boolean;
  isDown: boolean;
}
interface VoteAction {
  type: 'VOTED' | 'SELECT_VOTE';
  payload: {
    agreeYn: boolean;
  };
}

const voteReducer = (state: VoteState, action: VoteAction) => {
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
      return { isVoteAble: false, isUp: action.payload.agreeYn, isDown: !action.payload.agreeYn };

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
