import React from 'react';
import { Link } from '@reach/router';

const Blocks = () => {
  return (
    <ul>
      <li>
        <Link to={`/blocks/${'fun'}/students`}>Fundamentals</Link>{' '}
      </li>
      <li>
        <Link to={`/blocks/${'be'}/students`}>Backend</Link>
      </li>
      <li>
        <Link to={`/blocks/${'fe'}/students`}>Frontend</Link>
      </li>
      <li>
        <Link to={`/blocks/${'proj'}/students`}>Project block</Link>
      </li>
      <li>
        <Link to={`/blocks/${'grad'}/students`}>Graduated</Link>
      </li>
    </ul>
  );
};

export default Blocks;
