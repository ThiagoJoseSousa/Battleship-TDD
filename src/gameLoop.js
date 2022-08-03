const playerFactory= require('./Player');
const createGameboard= require('./dom');

const gameLoop = () => {
  const computer = playerFactory('computer');
  const player=playerFactory('player');

  createGameboard(player, computer);
  createGameboard(computer, player);
};
gameLoop();

module.exports = gameLoop;
