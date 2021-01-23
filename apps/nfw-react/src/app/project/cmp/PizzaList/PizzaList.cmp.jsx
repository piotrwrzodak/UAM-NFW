import React from 'react';
import { store } from '../../store';
import { PizzaItem } from '../PizzaItem';

export const PizzaList = ({ addPizza }) => {
  const state = store.getState();
  return (
    <ul className="menu__list menu__list--pizza">
      {state.data.pizza.allIds.map((id) => (
        <PizzaItem
          key={id}
          pizza={state.data.pizza.byId[id]}
          ingredients={state.data.ingredient}
          addPizza={addPizza}
        />
      ))}
    </ul>
  );
};
