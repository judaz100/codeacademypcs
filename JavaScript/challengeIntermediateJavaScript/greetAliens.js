const greetAliens = (datos) => {
    for (let i=0; i<=datos.length ; i++){
      console.log(`Oh powerful ${datos[i]}, we humans offer our unconditional surrender!`);
    }
  } 
  
  // When you're ready to test your code, uncomment the below and run:
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);