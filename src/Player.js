const gameBoards= require('./gameBoard.js');

const playerFactory= (newPlayer) => {
  const createBoard = gameBoards();

  const attack= (x, y, oppositePlayer)=> { // oppositePlayer is an object
    oppositePlayer.createBoard.receiveAttack(x, y);
  };

  return {createBoard, attack};
};
module.exports=playerFactory;
