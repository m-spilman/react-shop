import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loginReducer from './login/reducer';
import registerReducer from '.register/reducer';
import thunkMiddleware from './redux-thunk';

const Store = createStore(
  combineReducers(
    {
      login: loginReducer,
      register: registerReducer,
    },
    composeWithDevTools()
  ),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default Store;
