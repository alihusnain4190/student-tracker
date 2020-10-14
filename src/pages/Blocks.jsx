import React from 'react';
import { Link } from '@reach/router';

const Blocks = () => {
  return <ul>
    <Link to='blocks/fundamentals'><li>Fundamentals  </li></Link>  
  
    <Link to='blocks/backend'><li>Backend</li></Link> 
    
    <Link to='blocks/frontend'><li>Frontend</li></Link>  
    
  <Link to='blocks/project'><li>Project block</li></Link>  
  <Link to='blocks/graduate'><li>Graduated</li></Link>  
  </ul>;
};

export default Blocks;
