import actions from './action-types';
let products = JSON.parse(localStorage.getItem('products'));
const initialState = products ? { retrieved: true, products } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_REQUEST:
      return {
        retrieving: true,
      };
    case actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        retrieved: true,
        retrieving: false,
        products: action.products,
      };
    case actions.GET_PRODUCTS_FAILURE:
      return {};
    default:
      return state;
  }
};
