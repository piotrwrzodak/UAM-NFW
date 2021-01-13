import React from 'react';
import { PizzaItem } from '../PizzaItem';

export const PizzaList = props => {
  return (
    <ul  className="menu__list">
      {props.store.data.pizza.allIds.map(id => <PizzaItem key={id} pizza={props.store.data.pizza.byId[id]} />)}
    </ul>
  )
}