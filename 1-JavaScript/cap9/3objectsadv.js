/*Funciones arrow y this. cuando se usa this en un metodoe
es recomendable no definirlo con funicones arrow.*/

//asi no funciona
const robot = {
    energyLevel: 100,
    checkEnergy: () => {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();

//asi si funciona

const robot = {
    energyLevel: 100,
    checkEnergy () {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();
  