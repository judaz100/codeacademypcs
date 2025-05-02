/*La asignacion de propiedades , se realiza posterior a la creacion del objeto, los objetos son mutables esto se hace con 
la notacion punto o la notacion bracket el simbolo igual (=) al valor que se asigna.
spaceship['Fuel Type']='vegetable oil';
spaceship.color = 'gold';

si la propiedad no existe la propiedad se agrega al objeto.
si la propiedad existe será reemplazado. 
es importante saber que no se puede reasignar un objeto declarado como const

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

tambien se puede eliminar una propiedad con el operador "delete"

const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property


*/