import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from '../Nav';

export const Home = () => {
  return (
    <div>
      <Nav />
      <div className="home-container">
        <h1 className="first-heading">Welcome to LoremIpsum!</h1>
        <Link to="/menu" className="second-heading">
          Place an order
        </Link>
      </div>
    </div>
  );
};
