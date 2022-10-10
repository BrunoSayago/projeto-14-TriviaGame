import { SCORE_ACTION, ASSERTIONS_ACTION } from '../actions';

const INITIAL_STATE = {
  score: 0,
  assertions: 0,
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SCORE_ACTION:
    return {
      ...state,
      score: (state.score + action.payload),
    };
  case ASSERTIONS_ACTION:
    return {
      ...state,
      assertions: (state.assertions + 1),
    };
  default:
    return state;
  }
}

export default player;
