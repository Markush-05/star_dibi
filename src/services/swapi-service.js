/*
fetch('https://swapi.dev/api/films/1/')
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    console.log(body)

  }); 


  getResourcte('https://swapi.dev/api/films/12/')
.then((body) =>{
  console.log(body)

})
.catch((err) =>{
  console.log('Could not fetch',err)
})


*/



export default class SwpiService {

    _apiBase = 'https://swapi.dev/api/';
    _imageBase = 'https://starwars-visualguide.com/assets/img';
    
  
    
    getResourcte = async (url) => {
      const res = await fetch(this._apiBase+url); 
      if (!res.ok){
        throw new Error ('Could not fetch'+ url +'receved')
        
      }
      const body = await res.json();
      return body;
    };
  
    getAllPeople = async () =>{
      const res = await this.getResourcte('people/');
      return res.results
      .map(this._transformStarships)
      .slice(0, 10);
    }
  
    getPerson = async (id) =>{
      const res = await this.getResourcte('people/' + id+"/")
      return this._transformPerson(res)
    }
  
    getAllPlanets = async () =>{
      const res = await this.getResourcte('planets/');
      return res.results
      .map(this._transformStarships);
    }
  
    getPlanets = async (id) =>{
      const planet = await this.getResourcte('planets/' + id+"/");
      return this._transformPlenet(planet)
    }
  
    getAllStarships = async () =>{
      const res = await this.getResourcte('starships/');
      return res.results
      .map(this._transformStarships)
      .slice(0, 5);
    }
  
    getStarships = async (id) =>{
      const res = await this.getResourcte('starships/' + id+"/")
      return this._transformStarships(res)
    }

    getPersonImage = ({id}) => {
      return `${this._imageBase}/characters/${id}.jpg`
    };
  
    getStarshipImage = ({id}) => {
      return `${this._imageBase}/starships/${id}.jpg`
    };
  
    getPlanetImage = ({id}) => {
      return `${this._imageBase}/planets/${id}.jpg`
    };

    _extractId(item){
      const idRegExp = /\/([0-9]*)\/$/ ;
      return item.url.match(idRegExp)[1];
    }

    _transformPlenet = (planet) => {
      const roo ={
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      };
     
      return roo
    };

    _transformStarships = (starships) => {
      return {
        id: this._extractId(starships),
        name: starships.name,
        model: starships.model,
        manufacturer: starships.manufacturer,
        costInCredits: starships.cost_in_credits,
        length: starships.length,
        crew: starships.crew,
        passengers: starships.passengers,
        cargoCapacity: starships.cargoCapacity
      };
     
      
    };

    _transformPerson = (person) => {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      };
    };



  
  
  }
/*  
  
  const swapi = new SwpiService();
  
  swapi.getAllPeople().then((people) => {
    console.log(people);
    console.log(people.name);
  
    people.forEach((p) => {
      console.log(p.name);
    })
   
  })
  
  
  
  function  sayHi() {
    console.log('________')
    swapi.getPerson(1).then((people) => {
      console.log(people);
      console.log(people.name);
    
      people.forEach((p) => {
        console.log(p.name);
      })
     
    })
  
  }
  
  
  
  setTimeout(sayHi, 10000);

  */