import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import loginReducer from './login/reducers';
import registerReducer from './register/reducers';

import getProductsReducer from './products/reducers';

const Store = createStore(
  combineReducers(
    {
      login: loginReducer,
      register: registerReducer,
      products: getProductsReducer,
    },
    composeWithDevTools()
  ),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default Store;
