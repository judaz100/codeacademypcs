/* Las funciones puedene aceptar otras funciones como parametros uma funcion de alto orden es una funcion que recibe a otra funcion como parametro
y returna una fucion o un parametro.
las funciones Callback se invocan durante la ejecucion de una funcion de higher-order.

Cuando se invoca una funcion higher-order y se pasa una funcion como argumento no se invoca el argumento de la funcion,
invocando esto evaluara pasando el valor de retorno de la funcion llamada con las callback functions , se pasa la funcion por si
misma escribiendo el nombre de la funciion sin los parentesis

*/

const higherOrderFunc = param => { //estas es una funcion high order que recibe un parametro param 
    param(); //dentro del cuerpo se hace una invocacion de param usando paerentesis

    return `I just invoked ${param.name} as a callback function!`  //se returna al nombre de la funcion callback que se pasó
  }
   
  const anotherFunc = () => { //esta es otra funcion que aspira a ser llamada por la funcion hig-order
    return 'I\'m being invoked by the higher-order function!';
  }
  
  higherOrderFunc(anotherFunc); //finalmente se invoca la high order con anotherFunc como parametro
  

//* En este ejemplo se invoca la higher oreder function con una funcion anonima
  higherOrderFunc(() => {
    for (let i = 0; i <= 10; i++){
      console.log(i);
    }
  });

//Ejercicio//

const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val +2; //se define una variable para almecenar el parametro de val +2
    let checkB = func(val); //se almacena la ejecucion de la 
    if (checkA === checkB) {
      return checkB; //se retorna el callback si el condicional es true
    } else {
      console.log ('inconsistent results');
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 2)); //se invoca la funcion addTwo como un parametro de la higorder
  