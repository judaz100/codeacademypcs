// Write your function here:

/*const canIVote = (age) => {
  if (age < 18){
    return false;
  } else {
    return true;
  }
}*/
//refactorizando la funcion a una sola linea
const canIVote = age => age < 18 ? true : false ;

// Uncomment the line below when you're ready to try out your function
console.log(canIVote(19)) // Should print true

// We encourage you to add more function calls of your own to test your code!
console.log(canIVote(15)) //Should print false
console.log(canIVote(43)) //Should print true