import React, { useState } from 'react';

export const SauceItem = ({ sauce }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <li
      className={activeItem ? 'sauce sauce--selected' : 'sauce'}
      onClick={() => setActiveItem(!activeItem)}
    >
      <div className="sauce__name">{sauce.name}</div>

      {activeItem && (
        <div className="sauce__open">
          <button className="button">ADD {sauce.price}$</button>
        </div>
      )}
    </li>
  );
};
