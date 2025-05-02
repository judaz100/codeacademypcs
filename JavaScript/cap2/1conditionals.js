let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
//refactoring el primer if quedaria con operadores ternarios asi

isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');



let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

//refactorin con ternarios quedaria

isCorrect ? console.log('Correct!') :  console.log('Incorrect!');



let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

//refactoring
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//se puede agregar mas if .. else con un else if siempre despues del if y antes del else

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
}else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
}else if (season==='summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


//en casos donde el if , else if , else no es perfomante se puede utilizar 
// el switch el cual evalua la variable y la compara con un caso por ejemplo
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'


//un ejercicio de switch

let athleteFinalPosition = '';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

