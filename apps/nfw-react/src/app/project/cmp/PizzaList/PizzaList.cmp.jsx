import React from 'react';
import { PizzaItem } from '../PizzaItem';

export const PizzaList = props => {
  return (
    <ul  className="menu__list">
      {props.pizzas.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} />)}
    </ul>
  )
}