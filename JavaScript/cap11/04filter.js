/*asi como mpa filter retorna un nuevo arreglo de elementos. despues de filtrar ciertos elementos  del arreglo original,
la funcion callback para el filter debe retornar true o false dependiendo del elemeto que se pase 
el elemento que causa la funcion callback  returna true se agrega al nuevo arreglo

*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; //este es un arreglo de palabras
//const shortWords es una variabe declarada para almacenar el arreglo retornado por el .filter()
const shortWords = words.filter(word => {
//la callback funtion es una funcion arrow que tiene un parametro word
//todos los parametros del arreglo words pasaran como argumento de la funcion arrow.
    return word.length < 6;
//es la condicion que debe cumplir cada word del arreglo words que tenga menos de 6 caracteres.
});



//Otro ejemplo ejercicio

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})