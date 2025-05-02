/*Existen dos maneras de acceder a las propiedades de los objetos.
la primera es con la notacion punto (.)

ejemplo*/

let spaceship0 = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

spaceship0.homePlanet; // Returns 'Earth',
spaceship0.color; // Returns 'silver',


let crewCount = spaceship0.numCrew;
let planetArray = spaceship0.flightPath;


/* otra manera de acceder es el bracket notation [] como en los array . Se tiene que usar bracket notation cuando se acceden a las llaves 
que tengan numeros, espoacios o caracteres especiales.
*/
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

/*con bracket notation se puede usar una variable dentro de los bracketss para seleccionar
 la llave del objeto esto es importante cuando
se trabaje con funciones.*/

let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'


//Otro ejemplo

let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  let isActive = spaceship2['Active Mission'];
  
  console.log(spaceship2[propName]);