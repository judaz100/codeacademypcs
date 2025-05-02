// Write your code here:
const reverseArray = (string) => {
    let length = string.length - 1;
    let rArray=[];
    let j=0;
    console.log(length);
    for (let i=length; i>=0; i--){
      rArray.push(string[i]);
    }
    return rArray;
  }
  
  // When you're ready to test your code, uncomment the below and run:
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];