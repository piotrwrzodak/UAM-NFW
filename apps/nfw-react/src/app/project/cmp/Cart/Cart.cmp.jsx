import React from 'react';
import { Nav } from '../Nav';

export const Cart = () => {
  const submitOrder = () => {
    fetch('http://localhost:3333/api/order/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pizza: [{ id: 'id', ingredients: ['ing1', 'ing2'] }],
        sauce: [{ id: 'id', count: 3 }],
        total: 4,
      }),
    });
  };
  return (
    <>
      <Nav />

      <div className="cart">
        <h1 className="cart__heading">Your order:</h1>
        <ul className="cart__list">
          <li className="cart__item"></li>
        </ul>
      </div>
    </>
  );
};
