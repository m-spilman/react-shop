import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import loginReducer from './login/reducers';

const Store = createStore(
  combineReducers(
    {
      login: loginReducer,
    },
    composeWithDevTools()
  ),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default Store;
