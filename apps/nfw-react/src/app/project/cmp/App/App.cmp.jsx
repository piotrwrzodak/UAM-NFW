import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import { Cart } from '../Cart';
import { Home } from '../Home';
import { Menu } from '../Menu';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">home</Link>
        <Link to="/menu">menu</Link>
        <Link to="/cart">cart</Link>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/cart" component={Cart} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
