import React, { Component } from 'react';
import './starships-page.css';

import ErrorBoundery from '../error-boundery'
import Row from '../row'

import { withRouter } from 'react-router-dom';

import {
    StarshipList,
    StarshipDetails}from '../sw-components'
  

class StarshipPage extends Component {

    state= {
        selectedPerson: 5,
        hasError: false
    }

    ifOnClik = (id) => {
        console.log(this.props.history.push('/starships/'+id))
    }

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id})
        
    };

    render (){


        const itemLisr = (   
            < StarshipList  onItemSelected={this.onPersonSelected}/> 
            
        )

        const personDitels = (
            <ErrorBoundery>
               <StarshipDetails itemId={this.state.selectedPerson}
                   ifOnClik={this.ifOnClik}/>
            </ErrorBoundery>
        )
        
        return (
            
                <Row left={itemLisr} right={personDitels} />
            
                

            
           
        )
    }
}
export default  withRouter(StarshipPage)