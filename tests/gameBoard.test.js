const gameBoards= require('../src/gameBoard.js');

test('gameBoards is able to place ships at specific coordinates', () => {
  const board = gameBoards();
  board.positionShip(5, 5);
  const updatedBoard = board.getBoard();
  expect(updatedBoard[5][5]).toMatch('O');
});
