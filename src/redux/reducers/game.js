import { QUESTION_ACTION } from '../actions';

const INITIAL_STATE = {

  questions: [],

};

function game(state = INITIAL_STATE, action) {
  switch (action.type) {
  case QUESTION_ACTION:
    return {
      ...state,
      questions: action.payload,
    };
  default:
    return state;
  }
}

export default game;
