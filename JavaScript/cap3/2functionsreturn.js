//esta funcion muestra undefined en console
function rectangleArea(width, height) {
    let area = width * height;
  }
  console.log(rectangleArea(5, 7)) // Prints undefined
  
  //esto sucede porque esta funcion que aunque esta bien definida no captura su salida para ello se debe utilizar 
  //la palabra return y el valor en el caso anterior seria

  function rectangleArea(width, height) {
    let area = width * height;
    return area; //Prints 35
  }
  

function monitorCount(rows ,  columns) {
  return rows*columns;
  }
  const numOfMonitors = monitorCount (5, 4);
  console.log(numOfMonitors);


//se puede usar el return de una funcion como la entrada de otra funcion
//la siguiente funcion lleva de celsius a farenheit
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59

//Otro ejemplo de helper functions con la de los monitores

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows , columns){
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost);


