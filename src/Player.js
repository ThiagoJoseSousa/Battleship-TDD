const gameBoards= require('./gameBoard');

const playerFactory= (newPlayer) => {
  // const createBoard = gameBoards();
  const player=newPlayer;
  let turnVariable=false;


  const attack= (x, y, oppositePlayer)=> { // oppositePlayer is an object
    if (player==='player') {
      const validator=oppositePlayer.createBoard.receiveAttack(x, y);
      if (validator===false) {
        return;
      }
      turnVariable=true;
    } else if (player==='computer') {
      const randomXIndex = computerRandom(XnumbersArray.length-1);
      const randomXNumber = XnumbersArray[randomXIndex];
      XnumbersArray.splice(randomXIndex, 1);

      const randomYIndex = computerRandom(YnumbersArray.length-1);
      const randomYNumber= computerRandom(randomYIndex.length-1);
      YnumbersArray.splice(randomYIndex, 1);
      oppositePlayer.createBoard.receiveAttack(randomXNumber, randomYNumber);

      turnVariable=false;
    }
    // oppositeBoard = oppositePlayer.createBoard.getBoard();
    // console.log(oppositeBoard[randomX][randomY]);
  };

  // makes x/y variables random , and make a loop searching for '' elements
  const computerRandom = (max) => {
    return Math.floor(Math.random()*max);
  };
  // below is test

  function createArrayOfNumbers(end) {
    const myArray = [];
    for (let i = 0; i <= end; i++) {
      myArray.push(i); // creates an array with the index equal to  its inside number
    }
    return myArray;
  }
  const XnumbersArray = createArrayOfNumbers(9); // used for computer to not repeat Its plays
  const YnumbersArray = createArrayOfNumbers(9);

  const returnX =() => {
    return XnumbersArray;
  };
  const returnY =() => {
    return YnumbersArray;
  };
  const returnTurn = () => {
    if (createBoard.allSunk()===true) {
      turnVariable='Game has ended';
    }
  };
  return {// createBoard,
    attack, returnX, returnY, returnTurn};
};
module.exports=playerFactory;
