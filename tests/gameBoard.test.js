const gameBoards= require('../src/gameBoard.js');

test.skip('gameBoards is able to place ships at specific coordinates', () => {
  const playerBoard = gameBoards();
  const builtShip = {lengthStatus: 5, name: 'Carrier'};
  playerBoard.positionShip(builtShip, 4, 4);
  const updatedBoard = playerBoard.getBoard();
  expect(updatedBoard[4][4]).toMatch('A');
});


test.skip('you cant place a ship on another ship', () => {
  const playerBoard = gameBoards();
  const builtShip = {lengthStatus: 5, name: 'Carrier'};
  playerBoard.positionShip(builtShip, 4, 4);
  playerBoard.positionShip(builtShip, 4, 3);
  const updatedBoard = playerBoard.getBoard();
  expect(updatedBoard[4][3]).toMatch('');
});

test.skip('the hit was missed, coordinates recorded', () => {
  const playerBoard = gameBoards();
  playerBoard.receiveAttack(3, 3);
  const updatedBoard=playerBoard.getBoard();
  expect(updatedBoard[3][3]).toMatch('miss');
});

test.skip('the ship received a hit', ()=> {
  const playerBoard = gameBoards();
  playerBoard.receiveAttack( 4, 4);
  const builtShip = builtShipReturn();
  expect(builtShip.lengthStatus).toBe(4);
});

test.skip('did all their ships sunk?', ()=> {
  const playerBoard=gameBoards();
  playerBoard.receiveAttack( 4, 4);
  playerBoard.receiveAttack( 4, 5);
  playerBoard.receiveAttack( 4, 6);
  playerBoard.receiveAttack( 4, 7);
  playerBoard.receiveAttack( 4, 8);
  const sunkinformation=playerBoard.allSunk();
  expect(sunkinformation).toBe(true);
});
