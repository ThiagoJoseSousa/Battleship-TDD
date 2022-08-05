const gameBoards= require('./gameBoard.js');

const playerFactory= (newPlayer) => {
  const createBoard = gameBoards();
  const player=newPlayer;
  let turnVariable=false;

  const computerRemembers= [new Array(10), new Array(10), new Array(10), new Array(10),
    new Array(10), new Array(10),
    new Array(10), new Array(10), new Array(10), new Array(10)];


  const attack= (x, y, oppositePlayer)=> { // oppositePlayer is an object
    if (player==='player') {
      const validator=oppositePlayer.createBoard.receiveAttack(x, y);
      if (validator===false) {
        return;
      }
      oppositePlayer.turnVariable=true;
      turnVariable=true;
    } else if (player==='computer') {
      oppositePlayer.turnVariable=false;
      turnVariable=false;

      const RandomX= Math.floor(Math.random()*computerRemembers.length-1);
      const RandomY= Math.floor(Math.random()*computerRemembers[RandomX].length-1);
      computerRemembers[RandomX].splice(RandomY, 1);
      oppositePlayer.createBoard.receiveAttack(RandomX, RandomY);
    }
  };

  // makes x/y variables random , and make a loop searching for '' elements


  const returnX =() => {
    return XnumbersArray;
  };
  const returnY =() => {
    return YnumbersArray;
  };
  return {createBoard, attack, returnX, returnY, turnVariable, player, computerRemembers};
};
module.exports=playerFactory;
