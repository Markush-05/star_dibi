import React, { Component } from 'react';

import './planet-details.css';



export default class PlanetDetails extends Component {
    
  render() {

    return (
      <div className='planet-details row card'>
        
        <img className='person-image' src='https://starwars-visualguide.com/assets/img/planets/2.jpg'></img>

        <div className='crd-body '>
            <h4>r2-d2</h4>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    <span className='term'>Gender</span>
                </li>
                <li className='list-group-item'>
                    <span className='term'>Gender</span>
                </li>
                <li className='list-group-item'>
                    <span className='term'>Gender</span>
                </li>
            </ul>
        </div>
        
      </div>
    );
  };
}
