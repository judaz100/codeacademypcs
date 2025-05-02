/* 
There are a few general rules for naming variables:

Variable names cannot start with numbers.
Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
Variable names cannot be the same as keywords. For a comprehensive list of keywords check out MDN’s keyword documentation.
*/

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

//let es un tipo de variable introducidad en el standard ES6 significa que la variable puede ser reasignada con un valor diferente-
//se debe tener en cuenta que una variable let o var puede no tener ningun valor en cuyo caso seria undefined

var variableVar;
console.log(variableVar);
variableVar = 10;
console.log(variableVar);
variableVar = 'hola'
console.log(variableVar);

// esto es igual para llas definiciones con let.
let changeMe = true;
changeMe = false;
console.log(changeMe);

//una constante se define con const ES6 estas no pueden ser reasignadas.
entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos'; //Esto generaria un error dado que al ser const no puede cambiar su valor.

//existen operadores que permiten adicionar restar o dividir el valor de una consatante por ejemplo

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp+=5;
powerLevel-=100;
multiplyMe *= 11;
quarterMe

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);


//Existe otro operador conocido como incremento y decremento ++ y -- respectivamente


//tamien se pueden concatenar strings con variables
let favoriteAnimal = 'Cat'
console.log('My favorite animal:'+ favoriteAnimal)

//existe la interpolacion de strings desde una variable como por ejemplo
//se suele usar el backtick para ello.
let myName = 'Juan David';
let myCity = 'Medellin';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

//es normal tener que tipo de variable 
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable= 1;
console.log(typeof newVariable);
