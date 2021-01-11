import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

const Home = () => <h1>home</h1>;
const Menu = () => <h1>menu</h1>;
const Cart = () => <h1>cart</h1>;

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
