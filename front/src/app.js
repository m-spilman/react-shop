import React from 'react';
import { Route, Switch } from 'react-router';

import PrivateRoute from './components/shared/private-route';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
