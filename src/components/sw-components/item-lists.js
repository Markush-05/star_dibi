import React, { Component } from 'react';

import withData from '../hoc-helpers';
import ItemList from '../item-list';
import SwpiService from '../../services/swapi-service'

const swapiService = new SwpiService();  


const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService ;


const withChildFunction = (Wrapped, fn) => {
    return(props) => {
        return(
            <Wrapped { ... props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model , name}) => <span>{name} ({model})</span>;


const PersonList = withData(
    withChildFunction(ItemList,renderName),getAllPeople);

const PlanetList = withData(
    withChildFunction(ItemList,renderName),getAllPlanets);

const StarshipList = withData(
    withChildFunction(ItemList,renderModelAndName),getAllStarships);

export { 
    PersonList,
    PlanetList,
    StarshipList
};