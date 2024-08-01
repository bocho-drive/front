import * as S from '@/styles/index.style';
import { Vote } from '../type';
import VoteButton from './VoteButton';
import styled from 'styled-components';
import { useReducer } from 'react';
import { useAuth } from '@/@features/Auth/useAuth';
import { errorToast } from '@/components/atoms/Toast/useToast';
import { postVote } from '../api';

interface Props {
  voteList: Vote[];
}

const VoteForm = ({ voteList }: Props) => {
  const up = voteList.filter((vote) => vote.agreeYn).length;
  const down = voteList.length - up;

  const isAuth = useAuth((state) => state.isAuth);

  const [voteState, voteDispatch] = useReducer(voteReducer, {
    isVoteAble: isAuth,
    isUp: false,
    isDown: false,
  });

  const handleVote = () => {
    if (!voteState.isUp && !voteState.isDown) {
      errorToast('투표를 선택해주세요.');
      return;
    }
    postVote({ communityId: 1, agreeYn: voteState.isUp });
  };

  return (
    <S.div.Card>
      <S.div.Column $gap={20} $align="center">
        <S.div.Column $align="center">
          <S.h.H3>투표</S.h.H3>
          <S.p.P>{voteList.length}명 참여</S.p.P>
        </S.div.Column>
        <S.div.Row $gap={20}>
          <VoteCard $isActive={voteState.isUp} onClick={() => voteDispatch({ type: 'UP' })}>
            <VoteButton type="up" count={up} />
          </VoteCard>
          <VoteCard $isActive={voteState.isDown} onClick={() => voteDispatch({ type: 'DOWN' })}>
            <VoteButton type="down" count={down} />
          </VoteCard>
        </S.div.Row>
        <S.button.Button $size="small" $colors="primary" onClick={handleVote}>
          투표하기
        </S.button.Button>
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
  type: 'UP' | 'DOWN';
}

const voteReducer = (state: VoteState, action: VoteAction) => {
  switch (action.type) {
    case 'UP':
      if (!state.isVoteAble) {
        errorToast('투표 권한이 없습니다.');
        return state;
      }
      return { ...state, isUp: !state.isUp, isDown: false };
    case 'DOWN':
      if (!state.isVoteAble) {
        errorToast('투표 권한이 없습니다.');
        return state;
      }
      return { ...state, isUp: false, isDown: !state.isDown };
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
