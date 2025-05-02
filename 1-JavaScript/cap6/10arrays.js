/* existe algo conocido como pass-by-reference donde se esta pasando 
a una funcion una referencia donde esta almacenado en memoria la variable y se hace un
cambio en la memoria.
lo anterior hace mutable un arreglo dentro de una funcion.
*/

//ejemplo 1

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

//ejemplo 2

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);
console.log(concept)