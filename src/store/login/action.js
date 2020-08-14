import actionTypes from './actionTypes';
import { userService } from '../../services/userService';
import { history } from '../../utils/history';

export const loginAction = {
  login,
  logout,
};

function login(username, password) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGIN_REQUEST, user: { username } });

    userService.login(username, password).then(
      ((user) => {
        dispatch({ type: actionTypes.LOGIN_SUCCESS, user });
        history.push('/');
      },
      (error) => {
        dispatch({ type: actionTypes.LOGIN_FAILURE, error });
      })
    );
  };
}

function logout() {
  userService.logout();
  return { type: actionTypes.LOGOUT };
}
