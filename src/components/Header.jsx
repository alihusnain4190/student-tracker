import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div className="header-container">
      <h1>Northcoders Student Tracker!</h1>
      <ul className="container__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/blocks">Blocks</Link>
        </li>
        <li>
          <Link to="/graduates">Graduates</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
