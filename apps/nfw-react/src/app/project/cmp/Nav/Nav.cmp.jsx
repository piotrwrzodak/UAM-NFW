import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/menu">menu</Link>
      <Link to="/cart">cart</Link>
    </nav>
  );
};
