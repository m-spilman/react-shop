import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import './styles/bootstrap.min.css';
import App from './app';
import * as serviceWorker from './service-worker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
