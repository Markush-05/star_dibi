import React, { Component } from 'react';
import './planets-page.css';

import ErrorBoundery from '../error-boundery'
import Row from '../row'

import { withRouter } from 'react-router-dom';


import {
    PlanetDetails, 
    PlanetList}from '../sw-components'
  

export default class PlanetPage extends Component {

    state= {
        selectedPerson: 5,
        hasError: false
    }

    ifOnClik = (id) => {
        console.log(this.props.history.push('/planets/'+id))
    }

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id})
        
    };

    render (){


        const itemLisr = (   
            < PlanetList  onItemSelected={this.onPersonSelected}/> 
            
        )

        const personDitels = (
            <ErrorBoundery>
               <PlanetDetails itemId={this.state.selectedPerson}
               ifOnClik={this.ifOnClik}/>
            </ErrorBoundery>
        )
        
        return (
            
                <Row left={itemLisr} right={personDitels} />
            
                

            
           
        )
    }
}
