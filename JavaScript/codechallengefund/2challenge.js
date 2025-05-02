/*Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' 
if the two strings are the same and 'You disagree!' if the two strings are different.*/

// Write your function here:
/*
Esta es la funcion que hice al principio

const agreeOrDisagree = (string1 , string2) => {
  if (string1 === string2){
    return 'You agree!'
  } else {
    return 'You disagree!'
  }
}
*/
//
// luego pensé en refactorizar y salio esta
// ambas estan bien y funcionales.

const agreeOrDisagree = (string1, string2) => string1===string2 ? 'You agree!': 'You disagree'



// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!
console.log(agreeOrDisagree("yep","nop"))