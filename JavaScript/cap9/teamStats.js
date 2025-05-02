const team = {
    _players :[
        {firstName: 'Juan', lastName:'Osorio', age:43},
        {firstName: 'Pedro', lastName:'Romer', age:33},
        {firstName: 'Alfonso', lastName:'Cano', age:20},
    ],
    _games : [
        {opponent:'Jaguars',teamPoints:1,opponentPoints:1},
        {opponent:'Lions',teamPoints:3,opponentPoints:0},
        {opponent:'Flowers',teamPoints:0,opponentPoints:3},
        ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstNAme, newLastName,newAge) {
      let player ={
        firstName: newFirstNAme,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(player);
      console.log(this._players);
    },
    addGame(newOponent, newTeamPoints, newOponentPoints) {
      let game = {
        opponent: newOponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOponentPoints,
      }
      this._games.push(game);
      console.log(this._games);
    }
}

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
