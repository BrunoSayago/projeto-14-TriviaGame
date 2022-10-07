const LOGIN_ACTION = 'LOGIN_ACTION';

const loginAction = (userInfo) => ({
  type: LOGIN_ACTION,
  userInfo,
});

export {
  LOGIN_ACTION,
  loginAction,
};
