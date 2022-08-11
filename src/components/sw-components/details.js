import React, { Component } from 'react';


import ItemDetails, { Record } from '../item-details/item-details.js'
import SwpiService from '../../services/swapi-service'

const swapiService = new SwpiService();  

const {
    getPerson,
    getPlanets,
    getStarships,
    getPersonImage,
    getStarshipImage,
    getPlanetImage
} = swapiService ;


const PersonDetails = ({itemId ,ifOnClik}) => {
    return(
        <ItemDetails
        itemId={itemId} 
        getData={getPerson}
        getImageUrl={getPersonImage}
        ifOnClik={ifOnClik} >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />  

      </ItemDetails>

    )
};

const PlanetDetails = ({itemId, ifOnClik}) => {
    
    
    return(
        <ItemDetails
            itemId={itemId}
            getData={getPlanets}
            getImageUrl={getPlanetImage}
            ifOnClik={ifOnClik} >

            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />          
        </ItemDetails>

    )
};

const StarshipDetails = ({itemId, ifOnClik}) => {
    return(
        <ItemDetails
            itemId={itemId}
            getData={getStarships}
            getImageUrl={getStarshipImage}
            ifOnClik={ifOnClik} >

            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />          
      </ItemDetails>
    )
};

export { 
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};