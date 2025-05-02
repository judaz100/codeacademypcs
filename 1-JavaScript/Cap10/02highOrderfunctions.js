/*
Las funciones High Order son funciones que se utilizan para dar un nivel de abstraccion mayor,
estas permiten utilizar funciones dentro de otras funciones*/
//Funciones como Data

/*Es posible asignar funciones a las variables y nosotros podemos reasignar estos a nuevas variables 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
*/

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  console.log(isTwoPlusTwo.name);
  