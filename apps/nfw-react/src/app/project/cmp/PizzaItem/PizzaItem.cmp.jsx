import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PizzaItem = ({ pizza, props }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <li
      className={activeItem ? 'pizza-item pizza-item--selected' : 'pizza-item'}
      onClick={(e) => setActiveItem(!activeItem)}
    >
      <motion.div className="pizza-item__name">{pizza.name}</motion.div>
      <ul className="pizza-item__ingredients">
        {pizza.ingredients.map((i) => (
          <li className="ingredient" key={i}>
            {props.ingredientsById[i]?.name}
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="pizza-item__open"
            initial="closed"
            exit="closed"
            animate={activeItem ? 'open' : 'closed'}
            variants={{
              open: { opacity: 1, height: 'auto' },
              closed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            key={pizza.id}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="button"
              onClick={() =>
                props.addPizzaToCart({
                  id: `${pizza.id}`,
                  ingredients: `${pizza.ingredients}`,
                  price: pizza.price,
                })
              }
            >
              ADD {pizza.price}.00$
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};
