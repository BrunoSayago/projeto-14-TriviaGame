const LOGIN_ACTION = 'LOGIN_ACTION';
const SCORE_ACTION = 'SCORE_ACTION';
const QUESTION_ACTION = 'QUESTION_ACTION';
const TOKEN_ERROR = 'TOKEN_ERROR';
const ASSERTIONS_ACTION = 'ASSERTIONS_ACTION';

const loginAction = (userInfo) => ({
  type: LOGIN_ACTION,
  userInfo,
});

const questionsAction = (payload) => ({
  type: QUESTION_ACTION,
  payload,
});

const scoreAction = (payload) => ({
  type: SCORE_ACTION,
  payload,
});

const assertionsAction = () => ({
  type: ASSERTIONS_ACTION,
});

// const tokenError = (payload) => ({
//   type: TOKEN_ERROR,
//   payload,
// });

// function fetchWithThunk() {
//   return async (dispatch) => {
//     const localToken = localStorage.getItem('token');
//     try {
//       const questions = await getQuestions(localToken);
//       dispatch(questionsAction(questions));
//     } catch (error) {
//       dispatch(tokenError(error));
//     }
//   };
// }

export {
  QUESTION_ACTION,
  LOGIN_ACTION,
  TOKEN_ERROR,
  SCORE_ACTION,
  ASSERTIONS_ACTION,
  loginAction,
  questionsAction,
  scoreAction,
  assertionsAction,
};
