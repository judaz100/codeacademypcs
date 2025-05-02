//if

if (true) {
    console.log('This message will print!');
}

//ejemplo 1
let sale = true;
if (sale){
    console.log('Time to buy!');
}

//if-else 
console.log('ejemplo else')
if(false) {
    console.log('The code in this will not run');
} else {
    console.log('But the code in this block will!')
}

/*Operadorese de comparacion como menor que < mayor que > menor o igual que <= mayor o igual que >= igual === o no igual != 
compara el valor en la izquierda con el de la derecha */
let hungerLevel=7 ;
if (hungerLevel <= 7){
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

/*Exiten operadores que funcionan con booleanos como &&(AND) ||(OR) !(NOT) 
cuando se usa && se verifica que ambas cosas sean verdad
cuando se usa || solo una condicion debe ser verdad
y ! reversa el valor de verdad.*/

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood==='sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

//existen unos valores conocidos como falsy  que pueden ser 0 , strings vacios "" o '' , null, undefined , NaN
let wordCount = 2;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//ejemplo
let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

//usando comparativos
let username2 = '';
let defaultName2 = username2 || 'Stranger'; //esto se conoce como short-circuit evaluation
console.log(defaultName2); // Prints: Stranger

//otro ejemplo
let tool = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);