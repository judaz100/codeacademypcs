// Este es un comentario de una linea
/* este es un 
comentario de 
varias lineas*/

console.log(/*comentario*/43); //sigue siendo comentario
console.log(0);

/* Tipos de datos 
number
bigint
string
boolean
null
undefined
symbol
*/

console.log('Location of Codecademy headquarters: 575 Broadway, New York City'); // este es un string
console.log(40); // este es un numero

 //aca un ejemplo
console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);

/* Existen operadores aritmeticos  
como la  suma  + ,resta -, multiplicacion * division / y el remainder % 
aqui ejemplos de su uso */

console.log(43+3.5);
console.log(2025 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

// el simbolo de + se puede usar para concatenar dos strings
console.log('Hello' + 'World');
console.log('Hello'+ ' ' + 'World');

//los data types tienen propiedades como en el caso de un string la propiedad length
console.log('Teaching the world how to code'.length);

//Los metodos son acciones que se pueden ejecutar
//estos se invocan despues del datatype con .metodo()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy');
console.log('Codecademy'.toUpperCase());
// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   ');
console.log('    Remove whitespace   '.trim());

//existen metodos incorporados(build-in)  
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
//https://www.codecademy.com/resources/docs/javascript/methods

console.log(Math.random()*100);
console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));