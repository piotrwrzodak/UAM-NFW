import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from '../Nav';

export const Home = () => {
  return (
    <div>
      <Nav />
      <div className="homeContainer">
        <h1 className="firstHomeH">Welcome to LoremIpsum!</h1>
        <Link to="/menu" className="secondHomeH">Place an order</Link>
      </div>
    </div>
  );
};
