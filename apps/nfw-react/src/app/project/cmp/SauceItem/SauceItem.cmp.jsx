import React, { useState } from 'react';

export const SauceItem = ({ sauce, addSauce }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <li
      className={activeItem ? 'sauce sauce--selected' : 'sauce'}
      onClick={() => setActiveItem(!activeItem)}
    >
      <div className="sauce__name">{sauce.name}</div>

      {activeItem && (
        <div className="sauce__open">
          <button
            className="button"
            onClick={() => addSauce({ id: `${sauce.id}`, price: sauce.price })}
          >
            ADD {sauce.price}$
          </button>
        </div>
      )}
    </li>
  );
};
