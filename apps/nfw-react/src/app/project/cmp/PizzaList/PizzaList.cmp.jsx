import React from 'react';
import { store } from '../../store';
import { PizzaItem } from '../PizzaItem';

export const PizzaList = () => {
  const state = store.getState();
  return (
    <ul className="menu__list">
      {state.data.pizza.allIds.map((id) => (
        <PizzaItem key={id} pizza={state.data.pizza.byId[id]} />
      ))}
    </ul>
  );
};
