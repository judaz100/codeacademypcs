/*
un objeto puede tener mas objetos como propiedado incluso un array de otros objetos.
pore ejemplo en la nave espacial se pueden tener mas objetos como la tripulacion o un telescopio
*/

/*
const named = require("eslint-plugin-import/lib/rules/named");

const spaceship = {
    telescope: {
       yearBuilt: 2018,
       model: '91031-XLT',
       focalLength: 2032 
    },
   crew: {
       captain: { 
           name: 'Sandra', 
           degree: 'Computer Engineering', 
           encourageTeam() { console.log('We got this!') } 
        },
        liutenant:{
            name: 'John',
            degree: 'Network Engineer',
            encourageTeam() { console.log('We got this!') } 
        }
   },
   engine: {
       model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
           terabytes: 100,
           monitors: 'HD'
        },
       'back-up': {
          battery: 'Lithium',
          terabytes: 50
        }
   }
}; 
*/
//se puenden encadenar operadores para acceder a las propiedades anidadas

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'



/*otro ejemplo */

let spaceship = {
  passengers: [{name: 'Juan'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 


let capFave = spaceship.crew.captain['favorite foods'][0];
let firstPassenger = spaceship.passengers[0];

