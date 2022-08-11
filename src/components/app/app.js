import React, { Component } from 'react';

import AppHeader from '../haeder';
import RendomPlanet from '../random-planet'
import ErrorBoundery from '../error-boundery'
import PeoplePage from '../people-page'
import Row from '../row'

import {  BrowserRouter as Router , Redirect, Route, Routes, Switch } from 'react-router-dom';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails

}from '../sw-components'

import StarshipPage from '../starships-page';
import PlanetPage from '../planets-page';

import ItemDetails, { Record } from '../item-details/item-details.js'

import './app.css';


export default class App extends Component {

  state = {
    showRandomPlanet: true,

  }
 
  

  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({hesError: true});
  }
  


  render() {
    
    return (
       
      <ErrorBoundery>
        <Router>
          <div className="star-app">
            <AppHeader />

            <RendomPlanet/>
            <Switch>

            
                <Route exact  path="/" render={()=> <h2>Welcome to StarB</h2>} />
                <Route exact  path="/planets" component={PlanetPage} />

                <Route exact  path="/people" component={PeoplePage} />

                <Route exact  path="/starships" component={StarshipPage} />

                <Route exact path="/starships/:id" render={(e) => {
                    const id = e.match.params.id
                    return  <StarshipDetails itemId={id}/>
                }}/>

                <Route exact path="/people/:id" render={(e) => {
                    const id = e.match.params.id
                    return  <PersonDetails itemId={id}/>
                }}/>

                <Route exact path="/planets/:id" render={(e) => {
                    const id = e.match.params.id
                    return  <PlanetDetails itemId={id}/>
                }}/>
                <Redirect to='/'/>
            </Switch>
    

          
          
   
    
      

          </div>

        </Router>
      </ErrorBoundery>
    );
  };
}




const User = ({left}) => {


  //console.log(useLocation(), "_____", useParams(),left)

  return left
}





///    <PlanetDetails/>   <Row left={personDetails} right={starshipDetails}/>




/*


    <Routes exact={false}>
           

            <Route exact={false} path="/people" element={
              <Row left={<PersonList/>} right={<PersonDetails itemId={User}/>}/>} />
            
            <Route exact={false} path="/planets" element={
              <Row left={<PlanetList/>} right={<PlanetDetails itemId={5}/>}/>} />

            <Route exact={false}  path="/starships" element={
              <Row left={<StarshipList/>} right={<StarshipDetails itemId={5}/>}/>} />

       
           


            <Route exact={false} path="/users/:id" element={<User /> } />


            <Route exact={false} path="/starships/:id" element={<User  left={<StarshipDetails />} /> } />

            <Route exact={false} path="/" element={<h1>Welcome to StarDB</h1>}  />
           
  
        </Routes>







            <PlanetList/>
            <StarshipList/>
              

              <PlanetDetails itemId = {9}/>
              <PersonDetails itemId = {11}/>
              <StarshipDetails itemId = {5}/>
              

 <ErrorBoundery>
            <RendomPlanet/>
          </ErrorBoundery>
          <PeoplePage/>


                    <PersonList>
            { ({name}) => <span>{name}</span>}
          </PersonList>

          <StarshipList>
            { ({name}) => <span>{name}</span>}
          </StarshipList>

          <PlanetList>
            { ({name}) => <span>{name}</span>}
          </PlanetList>



<PeoplePage/>
      <div className='row mb2'>
               <div className='col-mb-6'>
                        <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPlanets}/>

                    </div>
                    <div className='col-mb-6'>
                        <PerrsonDetails personId={this.state.selectedPerson}/>
                        <ErrorButton/>

                    </div>
              </div>

              <div className='row mb2'>
                    <div className='col-mb-6'>
                        <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllStarships}/>

                    </div>
                    <div className='col-mb-6'>
                        <PerrsonDetails personId={this.state.selectedPerson}/>
                        <ErrorButton/>

                    </div>
        </div>
          


*/
