const gameBoards= require('./gameBoard.js');

const playerFactory= (newPlayer) => {
  const createBoard = gameBoards();
  const player=newPlayer;
  const turnVariable=false;


  const attack= (x, y, oppositePlayer)=> { // oppositePlayer is an object
    if (player==='player') {
      oppositePlayer.createBoard.receiveAttack(x, y);
      turnVariable=true;
    } else if (player==='computer') {
      const randomX= computerRandom(10);
      const randomY= computerRandom(10);
      oppositePlayer.createBoard.receiveAttack(randomX, randomY);
      oppositeBoard = oppositePlayer.createBoard.getBoard();
      console.log(oppositeBoard[randomX][randomY]);
      turnVariable=false;
    }
    return turnVariable;// attack will remember what turn is so 1 object will be chosen.
  };

  // makes x/y variables random , and make a loop searching for '' elements
  const computerRandom = (max) => {
    return Math.floor(Math.random()*max);
  };


  return {createBoard, attack};
};
module.exports=playerFactory;
