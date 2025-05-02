/*Write a function, findMyKeys(), that takes in an array of strings
 which may or may not contain 'keys'. If the keys are in the array, 
 your function should return the index at which they can be found. 
 If they’re not in the array, your function should return -1.*/

 // Write your code here:


const findMyKeys = (arr) => {
    for (let i =0; i < arr.length; i++){
      if (arr[i] === "keys") {
        return i;
      }
    }
    return -1;
  }
  
  
  
  
  
  // Feel free to comment out the code below to test your function
  
  const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
  
  console.log(findMyKeys(randomStuff))
  // Should print 4

  

/********************otra solucion*/

const findMyKeys2 = (arr) => {
return arr.findIndex(item => item === "keys");
}