//Una funcion es un bloque de codigo reusable que agrupa una tarea en especifico.
//hay varias formas de declarar una funcion  una forma es utilizando la declaracion de funciones.
// function IDENTIFIER() {}.
//Se debe tener en cuenta la declaracion de elevacion la cual permite acceso a la declaraciones de funciones.
//un ejemplo de ello es el siguiente 

greetWorld(); // Output: Hello, World! Esta no es necesariamente una buena practica

function greetWorld() {
  console.log('Hello, World!');
}
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

//ejemplos de funciones declaradas
getReminder();
greetInSpanish();

function getReminder(){
    console.log('Water the plants.')
    }
  
function greetInSpanish(){
    console.log('Buenas tardes.')
    }

//para llamar una funcion solo es poner el nombre de la funcion() cuantas veces sea necesario.