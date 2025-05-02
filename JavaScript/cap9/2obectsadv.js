/*the this keyword
Los objetos son colecciones de datos y funcionalidades
relacionadas.
las funcionalidades son metodos en nuestro objetos.
*/
const goat ={
    dietType: 'herbivore',
    makeSound() {
        console.log('baaaa');
    }
}

goat.makeSound();

/*si quisieramos agregar otro metodo a goat como el tipo de dieta se debe 
agregar con el la keyword this cuando desde un metodo al interior de un 
objeto se requiere invocar una de sus propiedades.
en el caso de goat seria
*/

const goat2={
    dietType: 'herbivore',
    makeSound() {
        console.log('baaaa');
    },
    diet() {
        console.log(this.dietType);
    }

}

goat2.diet();


/*--------*/
const robot = {
  model: '1E78V2',
  energyLevel: 100 ,
  provideInfo(){
    return (`I am ${this.model} and my current energy level is ${this.energyLevel}.`)
  }
};

console.log(robot.provideInfo());
