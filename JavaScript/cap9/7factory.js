/* las funciones factory permiten crear objetos rapidamente, a escala como una fabrica.
este tipo de funciones retornan un obejto que puede ser reusado para crear multiples instancias de objetos.
estas funciones puende tener parametros que permiten customizar los obejtos que se retornan.
miremos por ejemplo una fabrica ed mosntruos.*/


const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

//si quiesieramos crear un monstrou fantasma

const fantasma = monsterFactory('fantasmin',500,'deads','all are gone to die');
fantasma.scare();


//otro ejemplo de funcion factory
const robotFactory = (model, mobile) => {
    return{
      model: model,
      mobile: mobile,
      beep() {
        console.log("Beep Boop");
        }
      }
  }
  
  const tinCan = robotFactory('P-500' , true);
  
  tinCan.beep();

  