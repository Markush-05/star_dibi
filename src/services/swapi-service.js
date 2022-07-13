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

    _apiBase = "https://swapi.dev/api/"
    
    async getResourcte (url) {
      const res = await fetch(this._apiBase+url); 
      if (!res.ok){
        throw new Error ('Could not fetch'+ url +'receved')
        
      }
      const body = await res.json();
      return body;
    };
  
    async getAllPeople(){
      const res = await this.getResourcte('people/');
      return res.results.map(this._transformPerson)
    }
  
    async getPerson(id){
      const res = await this.getResourcte('people/' + id+"/")
      return this._transformPerson(res)
    }
  
    async getAllPlanets(){
      const res = await this.getResourcte('planets/');
      return res.results
    }
  
    async  getPlanets(id){
      const planet = await this.getResourcte('planets/' + id+"/");
      return this._transformPlenet(planet)
    }
  
    async getAllStarships(){
      const res = await this.getResourcte('starships/');
      return res.results
    }
  
    getStarships(id){
      return this.getResourcte('starships/' + id+"/");
    }

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
        costInCredits: starships.costInCredits,
        lensth: starships.lensth,
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