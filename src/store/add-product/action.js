import actionTypes from './action-types';
import { productService } from '../../services/product-service';
import { history } from '../../utils/history';

export const addProductAction = {
  addProduct,
};

function addProduct(title, price, categoryId, imageUrl) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_PRODUCT_REQUEST,
      product: { title, price, categoryId, imageUrl },
    });

    productService.addProduct(title, price, categoryId, imageUrl).then(
      (product) => {
        dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, product });
        history.push('/');
      },
      (error) => {
        dispatch({ type: actionTypes.ADD_PRODUCT_FAILURE, error });
        alert(error);
      }
    );
  };
}
