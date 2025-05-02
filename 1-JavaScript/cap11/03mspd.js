/* .map() se llama sobre un arreglo , el toma la funcion callback y returna un nuevo arreglo
*/
const numbers = [1, 2, 3, 4, 5];
const bigNumbers = numbers.map(number => {
    return number * 10;
})
//este trabaja de manera similar al .forEach() la diferencia mayor es que returna un arreglo nuevo.
console.log(numbers);
console.log(bigNumbers);


//Otro ejemplo
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(word =>{
  return word[0];
});

console.log(secretMessage.join(''));

const bigNumbers2 = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers2.map(number =>{
  return number / 100;
})
console.log(smallNumbers);