const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const NEW_EMAIL = 'NEW_EMAIL';

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NEW_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default user;
