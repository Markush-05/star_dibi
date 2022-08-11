import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

// modal-content
const AppHeader = () => {
  return (
    <div className="app-header ">
      <Link to={'/'}><h1>Star DB</h1></Link>
      <ul className='list-unstyled'>
        <li className='float-end'><Link to='/people/'>People</Link></li>
        <li className='float-end'><Link to='/planets/'>Planets</Link></li>
        <li className='float-end'><Link to='/starships/'>Starships</Link></li>
      </ul>
    </div>
  );
};

export default AppHeader;
