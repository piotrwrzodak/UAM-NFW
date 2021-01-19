import React from 'react';
import { store } from '../../store';

export const SauceList = () => {
  const state = store.getState();
  return (
    <ul className="menu__list menu__list--sauce">
      {state.data.sauce.allIds.map((id) => (
        <li className="sauce" key={id}>
          {state.data.sauce.byId[id]?.name}, {state.data.sauce.byId[id]?.price}$
        </li>
      ))}
    </ul>
  );
};
