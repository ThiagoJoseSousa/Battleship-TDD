const playerFactory = require('../src/Player.js');

test('player can attack a coordinate', ()=> {
  const player=playerFactory('player');
  const computer = playerFactory('computer');
  player.attack(4, 4, computer);
  const oppositeBoard = computer.createBoard.getBoard();
  expect(oppositeBoard[4][4]).toMatch('hit'||'miss');
});
