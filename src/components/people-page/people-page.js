import React, { Component } from 'react';
import './people-page.css';

import ItemList from '../item-list';
//import PerrsonDetails from '../perrson-details';


import ErrorBoundery from '../error-boundery'
import Row from '../row'
import { withRouter } from 'react-router-dom';

import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
  
  }from '../sw-components'
  

export default class PeoplePage extends Component {

    state= {
        selectedPerson: 5,
        hasError: false
    }

    ifOnClik = (id) => {
        console.log(this.props.history.push(id))
    }

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id})
        
    };

    render (){


        const itemLisr = (   
            <PersonList onItemSelected={this.onPersonSelected}/> 
            
        )

        const personDitels = (
            <ErrorBoundery>
               <PersonDetails itemId={this.state.selectedPerson}
                ifOnClik={this.ifOnClik}/>
            </ErrorBoundery>
        )
        
        return (
            
                <Row left={itemLisr} right={personDitels} />
            
                

            
           
        )
    }
}
