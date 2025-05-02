/*
Cuando un objeto almacena una funcion esto se llama metodo 
una propiedad es lo que un objeto tiene
un metodo es lo que un objeto realiza

esto se hace familiar porque por ejemplo consolo es un objeto global en javascript y .log() es el metodo en este objeto.

de igual manera Math es un objeto global y .floor() es un metodo en este objeto.

un ejemplo 

const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

otro ejemplo con las facilidades del ES6

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};


estos metodos se invocan de la siguiente manera

alienShip.invade();

ejercicio
*/ 

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}

alienShip.retreat();
alienShip.takeOff();
 