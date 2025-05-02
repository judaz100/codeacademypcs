//los getters son objetos que permiten retornar las propiedades internas de un objeto pero estos pueden mas que obtener el valo de una propiedad.

//miremos 

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
  
  // To call the getter method: 
  person.fullName; // 'John Doe'

  //se usas la palabra clave get junto con la funcion.
  //el if else se utiliza para validar la existencia de los datos.
  //se usa this para llamar las propiedades internas
  //no es necesario poner parentesis cuando se usa un getter.

  //un ejercicio
  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel==='number'){
        return `My current energy level is ${this._energyLevel}`;
      } else {
        return "System malfunction: cannot retrieve energy level";
      }
    }
    
  };
  
  console.log(robot.energyLevel);
  robot._energyLevel = 'mal';
  console.log(robot.energyLevel);
  