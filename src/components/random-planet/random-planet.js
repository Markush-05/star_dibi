import React, { Component } from 'react';

import SwpiService from '../../services/swapi-service'
import Spinner from '../spinner';
import './random-planet.css';
import ErrorMessage from '../errore-indicator'
import ErrorButton from '../error-button';



export default class RendomPlanet extends Component {




    swpiService = new SwpiService();

    state = {
        planet: {},
        loading: true,
        error: false,
        delet: false
        
    };

    componentDidMount() {
        //console.log('componentDidMount')
        this.updatePlanet();
        this.interval =  setInterval(this.updatePlanet, 5000);
    }
    componentWillUnmount() {
       /// console.log('ON_delet')
       clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) =>{
        this.setState({planet, loading: false}); 
    };

    onError = (err) =>{
       // console.log("erro")
        this.setState({
            error: true,
            loading: false
        }) 
    
    }

    onClickDel = () =>{
        this.setState({
            delet: !this.state.delet
        })

    }


    updatePlanet = () => {
        const id = Math.floor(Math.random()*17 + 2);
        //console.log('uptdetPlenet')
        this.swpiService.getPlanets(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
       
         
    };

    timeout (planet){
        console.log("Sett")
        console.log(this.state)
    }

    

    render() {

        const { planet ,loading, error,delet } = this.state;

        const dade = !(loading || error);
        const errorMessage = error ? <ErrorMessage/>: null;       
        const spinner = loading ? <Spinner/> : null;
        const content = dade ? <PlanetView planet={planet}/> :null ;

        console.log(typeof content)

        const object3 =  !delet ? {... errorMessage, ... content , ... spinner } : null;
    
        return (
            <div className='planet-details row card'>
                
                {object3}
               

                <div className='btn-grup'>
                    <button className='btn btn-warning' onClick={this.onClickDel}>Del</button>
                    <ErrorButton/>

                </div>
                

            </div>
        );
    }; 
} 

const PlanetView = ({planet})=> {

    const {name, population, rotationPeriod, 
        diameter,id } = planet;

    return (
        <React.Fragment>
             <img className='person-image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}></img>
                <div className='crd-body '>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Population</span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>RotationPeriod</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
                
        </React.Fragment>
    )
};
