import React from 'react';

export const PizzaItem = ({ pizza }) => {
  return (
    <li className="pizza-item" key={pizza.id}>{pizza.name}, {pizza.price}$</li>
  )
}