/*findIndex se utiliza para encontrar la localizacion de un elemento en u arreglo , este metodo, returna el indice
del primer elemento que sea evaluado en true en la funcion callback.
*/
const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(num=> {
    return num < 10;
})

//ejemplos....

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

console.log (foundAnimal);

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's'
});

console.log(startsWithS);