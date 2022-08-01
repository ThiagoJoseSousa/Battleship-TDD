const playerFactory = require('../src/Player.js');

test.skip('player can attack a coordinate', ()=> {
  const player=playerFactory('player');
  const computer = playerFactory('computer');
  player.attack(4, 4, computer);
  const oppositeBoard = computer.createBoard.getBoard();
  expect(oppositeBoard[4][4]).toMatch('hit'||'miss');
});

// const consoleSpy = jest.spyOn(console, 'log').mockImplementation(); // I know that it pollutes and I've to clear/scope if I use console log spy again

test.skip('computer makes random plays', ()=> {
// computer.attack(x and y random variables, player)
  const computer = playerFactory('computer');
  const player=playerFactory('player');
  computer.attack(9, 9, player);
  expect(console.log).toBeCalledTimes(1);
  expect(console.log).toHaveBeenLastCalledWith('miss');
});

test.skip('if legal move didnt happen, turn doesnt change', ()=> {
  const computer = playerFactory('computer');
  const player=playerFactory('player');

  expect(player.attack(10, 10, computer)).toBe(false);
});


