import React from 'react';
import { Nav } from '../Nav';

export const Cart = () => {
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
