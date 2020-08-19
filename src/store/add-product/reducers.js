import actions from './action-types';

const product = {};
const initialState = product ? { added: false, product } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT_REQUEST:
      return {
        adding: true,
      };
    case actions.ADD_PRODUCT_SUCCESS:
      return {
        adding: true,
        product: action.product,
      };
    case actions.ADD_PRODUCT_FAILURE:
      return {};
    default:
      return state;
  }
};
