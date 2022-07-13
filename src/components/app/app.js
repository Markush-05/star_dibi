import React, { Component } from 'react';

import AppHeader from '../haeder';
import RendomPlanet from '../random-planet'
import PlanetDetails from '../planet-details';
import ItemList from '../item-list';
import PerrsonDetails from '../perrson-details';
import ErrorMessage from '../errore-indicator'

import PeoplePage from '../people-page'

import './app.css';


export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hesError: false

  }

  

  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({hesError: true});
  }
    
  render() {
    
    if (this.state.hesError){
      return <ErrorMessage/>
    }

    return (

      <div className="star-app">
        <AppHeader/>
        <RendomPlanet/>
        <PeoplePage/>
        <PeoplePage/>
        <PeoplePage/>
       
      </div>
    );
  };
}


///    <PlanetDetails/>