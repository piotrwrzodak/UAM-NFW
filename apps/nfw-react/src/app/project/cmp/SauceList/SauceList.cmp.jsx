import React from 'react';
import { store } from '../../store';

export const SauceList = () => {
  const state = store.getState();
  return <ul className="menu__list menu__list--sauce"></ul>;
};
