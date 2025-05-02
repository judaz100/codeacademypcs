//existe u loop conocido como while en el siguiente ejemplo se convierte un for a while. 
// A for loop that prints 1, 2, and 3

for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }
  
  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;
  while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
  }
  //Otro ejemplo

  const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while (currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}



