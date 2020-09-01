// import actionTypes from './action-types';
// import { productService } from '../../services/product-service';
// import { history } from '../../utils/history';

// import { getProductAction } from '../view-products/action';

// export const addProductAction = {
//   addProduct,
// };

// function addProduct(title, price, categoryId, imageUrl) {
//   return (dispatch) => {
//     dispatch({
//       type: actionTypes.ADD_PRODUCT_REQUEST,
//       product: { title, price, categoryId, imageUrl },
//     });

//     productService
//       .addProduct(title, price, categoryId, imageUrl)
//       .then(
//         (product) => {
//           dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, product });
//           // history.push('/');
//         },
//         (error) => {
//           dispatch({ type: actionTypes.ADD_PRODUCT_FAILURE, error });
//           alert(error);
//         }
//       )
//       .then(() => {
//         const currentProducts = JSON.parse(localStorage.getItem('products'));
//         dispatch(getProductAction.getProducts(currentProducts));
//       })
//       .then(() => {
//         history.push('/admin-products');
//       });
//   };
// }
