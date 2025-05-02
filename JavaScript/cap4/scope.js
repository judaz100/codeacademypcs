//Scope se refiere a que pueden existir varibles globale o locales de acuerdo a quien pueda accederlas.
//un bloque es lo que se encuentra entre llaves , los bloques sonimportantes para definir el scope de las variables.

const city = 'New York City' //variable que existe fuera de un bloque

const logCitySkyline = () => {
  let skyscraper = 'Empire State Building'
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline())

//en el ejemplo anterior se puede ver como la funcion logCitySkyline tiene acceso a las variables skyscraper y city.

//en el siguiente ejemplo se puede evidenciar que la funcion  callMyNightSky puede usar las variables globales definidas es decir 
// Global Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => ('Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy);

console.log(callMyNightSky())

//Mientras que en la siguiente funcion se puede evidenciar el Block Scope donde el ultimo console log no logra presentar la variable del 
//dentro de la funcion generando un ReferenceError

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  
  logVisibleLightWaves();
  //console.log(lightWaves); //<- este genera error de referencia.


  //existe un termino conocido como SCOPE Pollution que define cuando se generen muchas variables globales y cuando estas chocan entresi , 
  //como en el ejemplo siguiten donde por error se reeasigna la variable global.
  let num = 50;

  const logNum = () => {
    num = 100; // Take note of this line of code
    console.log(num);
  };
  
  logNum(); // Prints 100
  console.log(num); // Prints 100
  

  //Un Ejemplo similar 
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};
console.log(callMyNightSky());
console.log(stars);

/*Algunas cositas importantes para tener en cuenta
Scope refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
Blocks are 
Preview: Docs In JavaScript, a statement is a unit of code that performs a specific action or task.
statements
 that exist within curly braces {}.
Global scope refers to the context within which variables are accessible to every part of the program.
Global variables are variables that exist within global scope.
Block scope refers to the context within which variables are accessible only within the block they are defined.
Local variables are variables that exist within block scope.
Global namespace is the space in our code that contains globally scoped information.
Scope pollution is when too many variables exist in a namespace or variable names are reused.*/