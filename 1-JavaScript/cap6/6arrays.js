/*existe una propiedad conocida como length la cual permite conocer el numero de elementos que hay en una arreglo.
ejemplo de ello */

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

//o 

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2


/*Existe un metodo en javascript el cual agrega al final de un arreglo un elemento nuevo este metodo se accede por medio de
la notacion punto conectando el arreglo.push(elemnto n,elemento n+1) 
en resumen el metodo push es capaz de cambiar el arreglo inicial.*/


const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('mop the floor' , 'clean the toilet') ;

console.log(chores);


/*Existe otro meto muy conocido que es el .pop() el cual remueve el ultimo item del arreglo
*/
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2


/* importante https://www.codecademy.com/resources/docs/javascript/arrays
: 
Preview: Docs Elements of an array are converted to strings and concatenated together, returning the resulting string.
.join()

, .slice(), 
Preview: Docs Modifies an array by inserting, deleting, and/or replacing array elements then returns an array of deleted elements.

.splice()
, 
Preview: Docs Removes and returns the first element of the array. All subsequent elements will shift down one place.
.shift()
, 
Preview: Docs Adds one or more elements to beginning of array and returns new length.
.unshift()
, and .concat()

algunos ejemplos
*/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn')
console.log(groceryList);

console.log(groceryList.slice(1,4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);