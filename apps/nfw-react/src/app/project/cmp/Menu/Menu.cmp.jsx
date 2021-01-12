import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from '../Nav';
import { PizzaList } from '../PizzaList';

export const Menu = (props) => {
  return (
    <>
      <Nav />
      <div className="menu">
        <h1 className="menu__heading">Pizza</h1>
        <PizzaList pizzas={props.pizzas} />
      </div>
      
    </>
  );
};