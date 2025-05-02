/*los objetos pasan por referencia  eto quiere decir que
cuando pasamos un variable asignada a un objeto dentro de una funcion como un argumento, el
computador interpreta el nombre como un apuntador en la memoria que contiene el objeto.

por lo cual las funciones que cambian las propiedades de de un objeto mutan al objeto permanentemente incluso
cuando el objeto es asignado a una variable const*/

const spaceship = {
    homePlanet : 'Earth',
    color : 'silver',
    
};

let paintIt = obj => {
    obj.color = 'glorious gold';
};

paintIt(spaceship);
console.log('primer ejemplo')
console.log(spaceship);
console.log( '');

//otro ejemplo

let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
    };
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  };
  
  greenEnergy(spaceship2);
  remotelyDisable(spaceship2);
  console.log('segundo ejemplo')

  console.log(spaceship2);
  