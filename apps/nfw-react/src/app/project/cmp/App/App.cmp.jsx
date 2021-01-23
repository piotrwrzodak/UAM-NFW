import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Cart } from '../Cart';
import { Home } from '../Home';
import { Menu } from '../Menu';

export const App = (props) => {
  useEffect(() => {
    props.init();
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu">
            <Menu addPizza={props.addPizzaToCart} />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
