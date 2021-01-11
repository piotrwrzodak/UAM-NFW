import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Cart } from '../Cart';
import { Home } from '../Home';
import { Menu } from '../Menu';

export class App extends React.Component {
  render() {
    return (
      <body className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/cart" component={Cart} />

            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </body>
    );
  }
}

export default App;
