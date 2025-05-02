/*se puede iterar sobre un array usando la propiedad length como parte de la condicion */

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}


const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// otro ejemplito de recorrer un arreglo.

for(let i=0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}