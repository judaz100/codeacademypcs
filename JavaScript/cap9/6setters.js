/*los setters son metodos que se crea para reasignar valores a propiedades existentes  dentro de un objeto.

*/

const person = {
    _age: 37,
    set age(newAge){
        if (typeof newAge === 'number'){
            this._age = newAge;
        } else {
            console.log('You must assign a number to age');
        }
    }
};

//se realia un chequeo del tipo de dato que se va a ingresar
person.age = 40;
console.log(person._age);
person.age = '40';

//otro ejemplo
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      }else {
        console.log("Pass in a number that is greater than or equal to 0'");
      }
    }
  };
  
  robot.numOfSensors =100;
  console.log(robot.numOfSensors);
  
