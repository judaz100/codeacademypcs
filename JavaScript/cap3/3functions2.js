/*Existe otra manera de definir una funcion esta manera es poniendola en una constante por ejemplo

const calculatedArea = function(width, height){
    const area= width*height;
    return area;
}
    
este tipo de funciones no son hoisted es decir no se pueden invocar desde el inicio
para invocarlas se llama la const junto con los valores

calculatedAres(width, height)
*/

const plantNeedsWater = function (day) {
    if(day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(plantNeedsWater('Tuesday'));


/*Segun el ES6 existen unas funciones que se llaman arrow (=>) estas funciones se definen
se define el parentesis con los parametros seguido por un arrow => y despues el {}
si cambiamos la funcion anterior tendriamos */

const plantNeedsWater2 =  (day) =>{
    if(day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(plantNeedsWater2('Wednesday'));

/*
Existen algunas tecnicas para definir funciones arrow.
1.-funciones que tienen cero o multiples parametros requieren parentesis

cero parametros
const functionName = () => {};
un parametro
const functionName = paramOne => {};
dos o mas
const functionName = (paramOne, paramTwo) => {};

2.-Una funcion compuesta por un cuerpo de una sola linea no requiere {}
linea simple
const sumNumbers = number => number + number;
Multilinea

const sumNumbers = number => {
    const sum = number + number;
    return sum;
};

ejemplo:
si se tiene
const squareNum = (num) => {
  return num * num;
};

se puede convertir en
const squareNum = num => num * num;

*/
const plantNeedsWater3 = (day) => {
    return day === 'Wednesday' ? true : false;
  };

const plantNeedsWater4 = day => day === 'Wednesday' ? true : false;