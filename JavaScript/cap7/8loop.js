//existe en javascript una manera de definir los loops mucho mas concisa conocida com for of

//un for normal para iterar obre un arreglo

const hobbies = ['singing', 'eating', 'quidditch', 'writing'];

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}

//el for of seria 

for (const hobby of hobbies) {
  console.log(hobby);
}

//otro ejemplo

const fruits = ['oranges', 'apples', 'grapes'];
 
for (const fruit of fruits) {
  console.log(fruit);
}


const username = 'joe';
 
for (const char of username) {
  console.log(char);
}

//Break and Continue

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
 
for (const bird of strangeBirds) {
  if (bird === 'Basan'){ 
    break; 
  }
  console.log(bird);
}

//Continue skip an item and continue

const strangeBirds2 = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
 
for (const bird of strangeBirds2) {
  if  (bird === 'Cow'){
    continue;
  }
  console.log(bird);
}

//un for of no puede hacer lecturas en reversa.

const nums = [1, 2, 3];

for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}

console.log('Time is up!');

