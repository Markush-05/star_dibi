import React, { Component } from 'react';
import './people-page.css';

import ItemList from '../item-list';
import PerrsonDetails from '../perrson-details';
import ErrorButton from '../error-button';
import ErrorMessage from '../errore-indicator'


export default class PeoplePage extends Component {

    state= {
        selectedPerson: 5,
        hasError: false
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })

    }

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id})
        
    };

    render (){

        if (this.state.hasError){
            return <ErrorMessage/>
          }
        
        return (
           
           <div className='row mb2'>
                <div className='col-mb-6'>
                    <ItemList onItemSelected={this.onPersonSelected}/>

                </div>
                <div className='col-mb-6'>
                    <PerrsonDetails personId={this.state.selectedPerson}/>
                    <ErrorButton/>

                </div>
           </div>
            
           
        )
    }
}
