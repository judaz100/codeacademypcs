/*un loop for tiene tres expresiones separadas por ; dentro del parentesis 
un inicializador que comienza el loop y puede usarse para declarar la variable de iterador

un condicion de paro la cual ese evaluada siempre y en el momento en que esta en true el bloque de codigo se ejecuta
pero si la condicion evalua falso el codigo se detendrá.

una iteration statement se utiliza para actualizar el iterator cada vez que pasa por el loop

este seria un ejemplo de la sintaxis descrita.

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

 */

for (let counter = 5 ; counter < 11 ; counter ++){
    console.log(counter);
  }

/* las iteraciones puedene hacerse en reversa  para lo cual el iterador se pone en el valo mas alto,
 y la condicion en el mas bajo y el iterador debe ir en decrecimiento.
*/
 
 for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}