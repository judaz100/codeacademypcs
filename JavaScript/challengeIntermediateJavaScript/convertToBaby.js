// Write your code here:
const convertToBaby = (string) => {
    let baby = [];
    for(let i =0;i<string.length;i++){
      baby.push(`baby ${string[i]}`);
    }
    return baby;
  }
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 