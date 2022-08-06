const gameBoards= require('./gameBoard.js');

const playerFactory= (newPlayer) => {
  const createBoard = gameBoards();
  const player=newPlayer;
  const turnVariable=false;

  // An array for the computer to remember what plays He's done before
  const computerRemembers=[];


  const attack= (x, y, oppositePlayer)=> { // oppositePlayer is an object
    if (player==='player') {
      const validator=oppositePlayer.createBoard.receiveAttack(x, y);
      if (validator===false) {
        return;
      }
      return true;
    } else if (player==='computer') {
      let randomX= Math.floor(Math.random() * 10);
      let randomY= Math.floor(Math.random() * 10);
      while (// returns true if the element is contained in array
        computerRemembers.includes(`${randomX}${randomY}`)
      ) {
        randomX= Math.floor(Math.random() * 10);
        randomY= Math.floor(Math.random() * 10);
      }
      computerRemembers.push(`${randomX}${randomY}`);


      oppositePlayer.createBoard.receiveAttack(randomX, randomY);
    }
  };
  // makes x/y variables random , pushes x/y and if computerRemembers has this element, try again.


  const returnX =() => {
    return XnumbersArray;
  };
  const returnY =() => {
    return YnumbersArray;
  };

  const returnTurn =() =>{
    return turnVariable;
  };

  return {createBoard, attack, returnX, returnY, turnVariable, returnTurn, player, computerRemembers};
};
module.exports=playerFactory;
