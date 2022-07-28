const ship= require('./shipFactory');

const gameBoards = () => {
  const board = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10),
    new Array(10), new Array(10), new Array(10), new Array(10), new Array(10)];
    // 10 array elements with an array that has 10 inside, grid.

  const getBoard = () => {
    return board;
  };


  const spaceChecker= (builtShip, xPlace, yPlace) => {
    const x= xPlace;
    const y= yPlace;
    const length=builtShip.lengthStatus;

    let canBePlaced = false;
    if (length+y<10 && checkForShips(builtShip, xPlace, yPlace)) {
      canBePlaced=true;
    }
    return canBePlaced;
  };


  const checkForShips =(lengthShip, xPlace, yPlace) =>{
    const x=xPlace;
    let y=yPlace;
    const length=lengthShip;
    let canBePlaced= false;
    for (let i=0; i<length; i++) {
      if (board[x][y]==='') {
        canBePlaced=true;
      } else {
        canBePlaced=false;
        break;
      }
      ++y;
    }
    return canBePlaced;
  };

  for (let row=0; row<board.length; row++) { // undefined cant be referenced
    for (let column=0; column<board[row].length; column++) {
      board[row][column] = '';
    }
  } // the outter loop wont end until the inner ends


  const positionShip= (builtShip, x, y) =>{
    const xPlace=x;
    let newYPosition = y;
    const length= builtShip.lengthStatus;
    if (newYPosition+length<10 && checkForShips(length, xPlace, newYPosition)) {
      for (let i = 0; i < length; i++) {
        board[xPlace][newYPosition] = 'O';
        newYPosition++;
      }
    }
  };
  const receiveAttack= (x, y) => {
    if (board[x][y]==='O') {
      board[x][y]='hit';
      board[x][y].hit();
    } else if (board[x][y]==='') {
      board[x][y]='miss';
    } else if (board[x][y]==='miss') {
      // nothing
    }
  };

  return {getBoard, positionShip, spaceChecker, checkForShips, receiveAttack};
}
;

module.exports= gameBoards;
