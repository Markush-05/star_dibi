import React, { Component } from 'react';

import './perrson-details.css';
import SwpiService from '../../services/swapi-service'
import Spinner from '../spinner';


export default class PerrsonDetails extends Component {

  swapiService = new  SwpiService();

  state = {
    person: null,
    loading: false
  };

  componentDidMount(){
    this.updatePerson()

  }

  updatePerson() {
    const { personId } = this.props;

    if(!personId){
      return;
    }

    this.swapiService.getPerson(personId)
    .then((person) =>{
      this.setState({ person,loading: false });
    })
  }

  componentDidUpdate(prevProps){
    if (this,this.props.personId !== prevProps.personId){
      this.setState({loading: true})
      this.updatePerson();
    }
  }
    
  render() {
    if (!this.state.person){
      return <span>Salect a person from a list</span>
    }

    

    const { person:{ id , name , gender, birthYear, eyeColor},loading } = this.state;


    if (loading){
      return <Spinner/>
    }

    return (
      
      <div className='perrson-details card row'>
        <img className='person-image' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}></img>

        <div className='crd-body '>
            <h4>{name}</h4>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    <span className='term'>Gender {gender}</span>
                </li>
                <li className='list-group-item'>
                    <span className='term'>{birthYear}</span>
                </li>
                <li className='list-group-item'>
                    <span className='term'>{eyeColor}</span>
                </li>
            </ul>
        </div>
        
      </div>
    );
  };
}
