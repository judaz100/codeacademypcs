/*la privacidad de algunos objetos en javascript esta dada por una convencion donde se le indica al objeto que 
al tener underscore sera un objeto privado (_)
por ejemplo const backAccount = {
    _amount: 1000
}
    de alli que amount no esta hecho para ser modificado directamente

    de igual forma aun asi es posible asignarle un monto

    bankAcccount._amount = 10000000;
*/

const robot = { //se define un objeto roboto
    _energyLevel: 100,  //se define una variable que no deberia ser modificada directamente
    recharge(){   //se define un metodo recarga
      this._energyLevel += 30; //cuando se llama el metodo recarga se aumenta en 30 el energyLevel
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`) 
    }
  };
  
  robot._energyLevel = 'high';  //se reasigna la variable a un string
  
  robot.recharge(); //se realiza llamado al metodo que esta dentro del objeto.
  //la salida es un efecto coercio de tipo lo importante es que se pueden 
  // causar efectos no deseados cuando se logra un objeto en estas propiedades.

  
  