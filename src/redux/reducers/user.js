import { LOGIN_ACTION } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    assertions: 0,
    name: '',
    score: 0,
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      ...state,
      user: action.userInfo,
    };
  default:
    return state;
  }
}

export default user;
