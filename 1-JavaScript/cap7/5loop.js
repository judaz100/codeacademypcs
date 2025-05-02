//los ciclos do while son cinclos en los cuales se ejecuta el codigo una vez y de acuerdo a una condicion se ejecuta un loop
//ejemplo

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

//otro ejemplo

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

//otro ejemplo


const cupsOfSugarNeeded = 4;
let cupsAdded=0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

