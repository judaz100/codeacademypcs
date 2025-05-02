/*.forEach es un metodo de iteracion que ejecutara el mismo codigo para cada elementeo de un arreglo.
por ejemplo*/

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

//groceries se conoce como el identificador
//lo que esta entre llaves es un ARRAY

groceries.forEach(function(groceryItem){
    console.log(' -' + groceryItem);
});



//Existe una manera de pasar la callback function como una funcion arrow como por ejemplo;

groceries.forEach(groeceryItem => console.log(' -' + groeceryItem));

//Tambien se puede definir la funcion antes de usarla como una funcion callback como por ejemplo:

function printGrocery(element) {
    console.log(' -' + element);
}

groceries.forEach(printGrocery);
//--------------------------------------------------------------------------------------------------------------//
//otro ejemplo ejercicio
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// en este caso yo preferí utilizar la funcion arrow en el for each pero se pudo hacer de varias maneras
fruits.forEach(fruit => console.log('I want to eat a '+ fruit));

//otra forema que tiene el mismo resultado es con la funcion definida dentro del for each
fruits.forEach(function(fruit){
    console.log('I want to eat a '+fruit);
  });
//y la ultima forma es crear la funcion

function printFruit(fruit){
    console.log('I want to eat a '+fruit);a
}

fruits.forEach(printFruit)


