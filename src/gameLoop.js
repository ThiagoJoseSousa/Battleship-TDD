const playerFactory= require('./Player.js');
const createGameboard= require('./dom.js');

const gameLoop = () => {
  const player=playerFactory('player');
  const computer = playerFactory('computer');

  createGameboard(player, computer);
  createGameboard(computer, player);
};
gameLoop();

module.exports = gameLoop;
