import actionTypes from './action-types';
import { userService } from '../../services/user-service';
import { history } from '../../utils/history';

export const loginAction = {
  login,
  logout,
};

function login(username, password) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGIN_REQUEST, user: { username, password } });

    userService.login(username, password).then(
      (user) => {
        dispatch({ type: actionTypes.LOGIN_SUCCESS, user });
        history.push('/');
      },
      (error) => {
        dispatch({ type: actionTypes.LOGIN_FAILURE, error });
        alert(error);
      }
    );
  };
}

function logout() {
  userService.logout();
  return { type: actionTypes.LOGOUT };
}
