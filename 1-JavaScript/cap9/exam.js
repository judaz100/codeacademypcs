//evaluate apples

const refrigerator = {
    dairy: ['cheese', 'milk', 'sour cream'],
    temperature: 35,
    'produce drawer': {
        vegetables: ['lettuce', 'brocoli', 'peas'],
        fruit: ['apples', 'berries', 'grapes'],
    }
}

console.log(refrigerator['produce drawer'].fruit[0])

//cual es el metodo objeto que se utiliza para copiar todas las propiedades en un nuevo objeto

//Object.assign();

//firma correcta de crear un objeto 

let myObject = {
    greeting : 'hello'
}

//como se llama el metodo del siguiente codigo
let myObj = {
    sayHello() {
        return 'hello';
    }
}

console.log(myObj.sayHello());

//asignacion destructured
const myDog = {
    name: 'Tadpole',
    breed: 'mutt',
    color: 'tan',
    weight: 32
}

let {name} = myDog;

console.log(name);

//asignacion de propiedad
let bikes = {
    schwinn: 'blue',
    trek: 'black',
}

bikes['specialized'] = 'red' ;

console.log(bikes);

//setter
let tempObj = {
    _num: 22,
    set num(numIn){
        this._num = numIn;
    }
}

tempObj.num = 33;

console.log(tempObj._num);


