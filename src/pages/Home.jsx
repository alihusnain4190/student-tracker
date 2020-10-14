import React from 'react';
import { Link } from '@reach/router';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Northcoders Student Tracker!</h2>
      <p>See below for available endpoints</p>
      <ul>
        <Link to="/students">
          <li>Students</li>
        </Link>
        <Link to="/graduates">
          <li>Graduates</li>
        </Link>
        <Link to="/blocks">
          <li>Blocks</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
