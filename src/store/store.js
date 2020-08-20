import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import loginReducer from './login/reducers';
import registerReducer from './register/reducers';
import addProductReducer from './add-product/reducers';

const Store = createStore(
  combineReducers(
    {
      login: loginReducer,
      register: registerReducer,
      addProduct: addProductReducer,
    },
    composeWithDevTools()
  ),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default Store;
