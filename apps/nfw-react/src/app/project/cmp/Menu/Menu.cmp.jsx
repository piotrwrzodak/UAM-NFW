import React from 'react';

import { Nav } from '../Nav';
import { PizzaList } from '../PizzaList';

export const Menu = () => {
  return (
    <>
      <Nav />
      <div className="menu">
        <h1 className="menu__heading">Pizza</h1>
        <PizzaList />
      </div>
    </>
  );
};
