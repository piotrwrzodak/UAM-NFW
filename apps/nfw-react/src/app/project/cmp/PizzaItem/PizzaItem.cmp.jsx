import React from 'react';
import { store } from '../../store';

export const PizzaItem = ({ pizza }) => {
  const state = store.getState();

  return (
    <>
      <li className="pizza-item">
        {pizza.name}, {pizza.price}$
      </li>

      <li>
        <ul className="pizza-ingredient">
          {pizza.ingredients.map((i) => (
            <li className="pizza-ingredient__item" key={i}>
              {state.data.ingredient.byId[i]?.name}
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};
