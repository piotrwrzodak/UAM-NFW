import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Cart } from '../Cart';
import { Home } from '../Home';
import { Menu } from '../Menu';

export const App = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3333/api/pizza')
      .then(r => r.json())
      .then(pizzas => setPizzas(pizzas))
  }, []);


  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu">
            <Menu pizzas={pizzas}/>
          </Route>
          <Route path="/cart" component={Cart} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
