console.log('hi User');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput ==='rock' || userInput === 'paper' || userInput ==='scissors' || userInput === 'bomb'){
    return userInput ;
  } else {
    return ('Error');
  }

}

const getComputerChoice = () => {
  const randomNumber =  Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0 :
      return 'rock';
      break;
    case 1 :
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice , computerChoice) => {
  if(userChoice === computerChoice){
    return 'Tie';
  } 
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
        return 'Computer Won!'
    } else {
        return 'User Won!'
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
        return 'Computer Won!'
      } else {
        return 'User Won!'
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
        return 'Computer Won!'
      } else {
        return 'User Won!'
    }
  }
  if(userChoice === 'bomb'){
    return 'User Won'
  }
}

const playgame = () => {
  const userChoice = getUserChoice('rOCk');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
}

playgame('rock');
