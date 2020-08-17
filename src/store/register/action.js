import actionTypes from './action-types';
import { userService } from '../../services/user-service';
import { history } from '../../utils/history';

export const registerAction = {
  register,
};

function register(username, password, firstName, lastName) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REGISTER_REQUEST,
      user: { firstName, lastName, username, password },
    });

    userService.register(username, password, firstName, lastName).then(
      (user) => {
        dispatch({ type: actionTypes.REGISTER_SUCCESS, user });
        history.push('/');
      },
      (error) => {
        dispatch({ type: actionTypes.REGISTER_FAILURE, error });
        alert(error);
      }
    );
  };
}
