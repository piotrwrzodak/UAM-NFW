import React from 'react';
import { store } from '../../store';
import { SauceItem } from '../SauceItem';

export const SauceList = () => {
  const state = store.getState();
  return (
    <ul className="menu__list menu__list--sauce">
      {state.data.sauce.allIds.map((id) => (
        <SauceItem sauce={state.data.sauce.byId[id]} key={id} />
      ))}
    </ul>
  );
};
