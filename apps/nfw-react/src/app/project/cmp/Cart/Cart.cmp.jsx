import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../Nav';

export const Cart = ({ props }) => {
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
        <div className="cart__container">
          {props.order.total ? (
            <ul className="cart__list">
              {props.order.pizza.map((p, i) => (
                <li className="cart__item" key={i}>
                  {props.pizzasById[p.id]?.name}
                </li>
              ))}
              {props.order.sauce.map((s, i) =>
                s.count === 1 ? (
                  <li className="cart__item" key={i}>
                    {props.saucesById[s.id]?.name}
                  </li>
                ) : (
                  <li className="cart__item" key={i}>
                    {s.count}x {props.saucesById[s.id]?.name}
                  </li>
                )
              )}
            </ul>
          ) : (
            <div className="cart__empty">
              <h1 className="cart__heading cart__heading--one">
                Your cart is empty
              </h1>
              <Link to="/menu" className="cart__heading cart__heading--two">
                Go back to menu
              </Link>
            </div>
          )}
          {props.order.total ? (
            <button className="button">PAY {props.order.total}$</button>
          ) : null}
        </div>
      </div>
    </>
  );
};
