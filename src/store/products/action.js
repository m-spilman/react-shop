import actionTypes from './action-types';
import { productService } from '../../services/product-service';
import { history } from '../../utils/history';

export const productActions = {
  getProducts,
  addProduct,
  editProduct,
};
function addProduct(title, price, categoryId, imageUrl) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ADD_PRODUCT_REQUEST,
      product: { title, price, categoryId, imageUrl },
    });

    productService
      .addProduct(title, price, categoryId, imageUrl)
      .then(
        (product) => {
          dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, product });
        },
        (error) => {
          dispatch({ type: actionTypes.ADD_PRODUCT_FAILURE, error });
          alert(error);
        }
      )
      .then(() => {
        const currentProducts = JSON.parse(localStorage.getItem('products'));
        dispatch(productActions.getProducts(currentProducts));
      })
      .then(() => {
        history.push('/admin-products');
      });
  };
}
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
function editProduct(title, price, categoryId, imageUrl, id) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.EDIT_PRODUCT_REQUEST,
      product: { title, price, categoryId, imageUrl, id },
    });
    productService
      .editProduct(title, price, categoryId, imageUrl, id)
      .then(
        (product) => {
          dispatch({ type: actionTypes.EDIT_PRODUCT_SUCCESS, product });
        },
        (error) => {
          dispatch({ type: actionTypes.EDIT_PRODUCT_FAILURE, error });
          alert(error);
        }
      )
      .then(() => {
        const currentProducts = JSON.parse(localStorage.getItem('products'));
        dispatch(productActions.getProducts(currentProducts));
      })
      .then(() => {
        history.push('/admin-products');
      });
  };
}
