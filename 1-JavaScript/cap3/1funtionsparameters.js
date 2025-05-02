//las funciones pueden tener inputs estas se conocen como parametros de la funcion cada parametro 
//es un marcador de posicion para la informacion que será introducida en la funcion.

function sayThanks(name) {
    console.log('Thank you for your purchase ' + name +'! We appreciate your business.');
  }
  
  sayThanks('Cole');

  //En las funciones tambien se pueden poner parametros por defecto como por ejemplo
  //en el caso de la funcion de ejemplo siempre pondrá el mensaje stranger a menos que se incruste un parámetro.
  //esto permite tener en cuenta cuando no se pasa un argumento 

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
    }

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
  
//otro ejemplo de parametros por defecto
function makeShoppingList(item1='milk', item2 = 'bread', item3 =  'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  
  //makeShoppingList()
  makeShoppingList('meat')