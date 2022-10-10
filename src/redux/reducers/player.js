import { SCORE_ACTION } from '../actions';

const INITIAL_STATE = {
  score: 0,
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SCORE_ACTION:
    return {
      score: (state.score + action.payload),
    };
  default:
    return state;
  }
}

export default player;
