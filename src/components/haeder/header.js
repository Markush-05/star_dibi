import React from 'react';
import './header.css';

// modal-content
const AppHeader = () => {
  return (
    <div className="app-header ">
      <h1>Star DB</h1>
      <ul className='list-unstyled'>
        <li className='float-end'><a href='#'>People</a></li>
        <li className='float-end'><a href='#'>Planets</a></li>
        <li className='float-end'><a href='#'>Starships</a></li>
      </ul>
    </div>
  );
};

export default AppHeader;
