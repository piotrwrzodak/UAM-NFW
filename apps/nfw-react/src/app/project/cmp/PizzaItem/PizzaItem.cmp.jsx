import React from 'react';

export const PizzaItem = ({ pizza, ingredients }) => {
  return (
    <>
      <li className="pizza-item">
        {pizza.name}, {pizza.price}$
      </li>

      <li>
        <ul className="pizza-ingredient">
          {pizza.ingredients.map((i) => (
            <li className="pizza-ingredient__item" key={i}>
              {ingredients.byId[i]?.name}
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};
