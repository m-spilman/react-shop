import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { provider } from 'react-redux';

import App from './app';
import * as serviceWorker from './service-worker';
import { configureFakeBackend } from './utils/fake-backend';
import './styles/styles.scss';
import './styles/bootstrap.min.css';

configureFakeBackend();
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
