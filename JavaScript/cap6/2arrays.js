/*cada elemento de un arreglo tiene una posicion conocida como indice los cuales con referentes a un item de la 
lista.
los indices en java script comienzan en 0es decir que la primer posicision será la 0. como por ejemplo.

let ciudades = ['medellin' , 'bogota' , 'cali'];
    indices    [     0      ,    1     ,   2  ]

si quisiera hacer un llamado a  cali entonces seria 
ciudades[2]
*/

let ciudades = ['medellin' , 'bogota' , 'cali'];
console.log(ciudades[2]);

/*tambien se puede hacer para caracteres que estan en un string*/

const hello = 'Hello World';
console.log(hello[6]);

//otro ejemplo
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0]
console.log(listItem)
console.log(famousSayings[2]);
//que pasa por fuera del arreglo?
console.log(famousSayings[3]); //undefined