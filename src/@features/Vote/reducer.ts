import { Vote } from './type';

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
export const voteInitialState: VoteState = {
  isVoteAble: true,
  isUp: false,
  isDown: false,
  voteInfo: null,
};

export const voteReducer = (state: VoteState, action: VoteAction | VotedAction | ResetAction) => {
  switch (action.type) {
    case 'SELECT_VOTE':
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
