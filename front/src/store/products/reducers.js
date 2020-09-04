import actions from './action-types';

const initialState = { loading: false, products: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    case actions.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case actions.ADD_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case actions.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.product,
      };
    case actions.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case actions.EDIT_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case actions.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actions.EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
