import actionTypes from './action-types';

export const getProductAction = {
  getProducts,
};

function getProducts(products) {
  return (dispatch) => {
    Promise.resolve(dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST })).then(
      () => {
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, products });
      },
      (error) => {
        alert(error);
        dispatch({ type: actionTypes.PRODUCTS_FAILURE, error });
      }
    );
  };
}
