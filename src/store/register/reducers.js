import actions from './action-types';

const user = {};
const initialState = user ? { registered: false, user } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
      return {
        registering: true,
        user: action.user,
      };
    case actions.REGISTER_SUCCESS:
      return {
        registered: true,
        user: action.user,
      };
    case actions.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
