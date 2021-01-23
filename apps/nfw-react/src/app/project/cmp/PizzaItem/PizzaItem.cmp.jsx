import React, { useState } from 'react';

export const PizzaItem = ({ pizza, props }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <li
      className={activeItem ? 'pizza-item pizza-item--selected' : 'pizza-item'}
      onClick={(e) => setActiveItem(!activeItem)}
    >
      <div className="pizza-item__name">{pizza.name}</div>
      <ul className="pizza-item__ingredients">
        {pizza.ingredients.map((i) => (
          <li className="ingredient" key={i}>
            {props.ingredientsById[i]?.name}
          </li>
        ))}
      </ul>
      {activeItem && (
        <div className="pizza-item__open">
          <button
            className="button"
            onClick={() =>
              props.addPizzaToCart({
                id: `${pizza.id}`,
                ingredients: `${pizza.ingredients}`,
                price: pizza.price,
              })
            }
          >
            ADD {pizza.price}.00$
          </button>
        </div>
      )}
    </li>
  );
};
