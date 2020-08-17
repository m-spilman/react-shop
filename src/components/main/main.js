import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import AdminOrders from '../../pages/admin-orders';
import AdminProducts from '../../pages/admin-products';
import CheckOut from '../../pages/check-out';
import Orders from '../../pages/orders';
import OrderSuccess from '../../pages/order-success';
import Products from '../../pages/products';
import ShoppingCart from '../../pages/shopping-cart';
import './main.scss';

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/admin-orders" component={AdminOrders} />
        <Route exact path="/admin-products" component={AdminProducts} />
        <Route exact path="/check-out" component={CheckOut} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/order-success" component={OrderSuccess} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/shopping-cart" component={ShoppingCart} />
        <Redirect from="*" to="/" />
      </Switch>
    </main>
  );
}
export default Main;
