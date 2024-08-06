import { useAuth } from '@/@features/Auth/useAuth';
import * as S from '@/styles/index.style';
import styled from 'styled-components';
import { useVoteForm } from '../useVoteForm';
import { useVoteSuspenseQuery } from '../useVoteQuery';
import VoteButton from './VoteButton';

interface Props {
  communityId: number;
}

const VoteForm = ({ communityId }: Props) => {
  const voteQuery = useVoteSuspenseQuery(communityId);

  const up = voteQuery.data.filter((vote) => vote.agreeYn).length;
  const down = voteQuery.data.length - up;

  const isAuth = useAuth((state) => state.isAuth);

  const { handleCancelVote, handleVote, handleVoteSelect, voteState } = useVoteForm({ communityId, voteQuery });

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
