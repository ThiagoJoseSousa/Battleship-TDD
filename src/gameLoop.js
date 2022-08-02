const playerFactory= require('./Player');

const gameLoop = () => {
  const computer = playerFactory('computer');
  const player=playerFactory('player');

  // while turnVariable===false; player attacks, else computerTurn.
  // allSunk on turnVariable grants It ends
  while (player.returnTurn()!=='Game has ended' || computer.returnTurn()!=='Game has ended') {
    while (player.returnTurn()===false) {
      const x= clickedXListener;
      const y=clickedYlistener;
      player.attack(x, y, computer);
    }
    while (player.returnTurn()===true) {
      computer.attack(4, 4, player);
    }
  }
};
