const playerFactory= require('./Player');

const gameLoop = () => {
  const computer = playerFactory('computer');
  const player=playerFactory('player');

  // while turnVariable===false; player attacks, else computerTurn.
  // allSunk on turnVariable grants It ends
};

module.exports = gameLoop;
