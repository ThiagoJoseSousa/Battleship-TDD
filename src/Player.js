const gameBoards= require('./gameBoard.js');

const playerFactory= (newPlayer) => {
  const createBoard = gameBoards();
  const player=newPlayer;
  const turnVariable=false;


  const attack= (x, y, oppositePlayer)=> { // oppositePlayer is an object
    if (player==='player') {
      const validator=oppositePlayer.createBoard.receiveAttack(x, y);
      if (validator===false) {
        return;
      }
      turnVariable=true;
    } else if (player==='computer') {
      const randomX= computerRandom(10);
      const randomY= computerRandom(10);

      const validator=oppositePlayer.createBoard.receiveAttack(randomX, randomY);
      while (validator ===false) {
        randomX= computerRandom(10);
        randomY= computerRandom(10);
        validator=oppositePlayer.createBoard.receiveAttack(randomX, randomY);
      }
      // oppositeBoard = oppositePlayer.createBoard.getBoard();
      // console.log(oppositeBoard[randomX][randomY]);
      turnVariable=false;
    }
    return turnVariable;// attack will remember what turn is out of ifs.
  }
  ;

  // makes x/y variables random , and make a loop searching for '' elements
  const computerRandom = (max) => {
    return Math.floor(Math.random()*max);
  };


  return {createBoard, attack};
};
module.exports=playerFactory;
