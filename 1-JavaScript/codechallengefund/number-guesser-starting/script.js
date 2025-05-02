let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
//6
const getAbsoluteDistance = (x,y) => {
  return Math.abs(y - x);
}

// Write your code below:
const generateTarget = () => {
  return (Math.floor(Math.random()*10));
}
//console.log (generateTarget());

const compareGuesses = (user,computer,secret) => {
  if (user < 0 || user > 9){
    window.alert("It’s not possible to set a number outside this range");
  }
  let distanceUserSecret =  getAbsoluteDistance(user,secret) ;
  let distanceComputerSecret = getAbsoluteDistance(computer,secret);
  if (distanceComputerSecret === distanceUserSecret){
    return true;
  } else if (distanceComputerSecret < distanceUserSecret){
    return false;
  } else if (distanceComputerSecret > distanceUserSecret){
    return true;
  } else {
    return ('There is an error');
  }
}


const updateScore = (winner) => {
  if (winner == 'human'){
    humanScore+=1;
  }else if (winner == 'computer'){
    computerScore+=1;
  }else {
    return 'we have an error on score';
  }
}

const advanceRound = () => {
  currentRoundNumber+=1;
}
