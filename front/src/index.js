import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './app';
import * as serviceWorker from './service-worker';
import { configureFakeBackend } from './utils/fake-backend';
import Store from './store/store';
import './styles/styles.scss';
import { history } from './utils/history';
import './styles/bootstrap.min.css';

configureFakeBackend();
ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
