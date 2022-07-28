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
    if (length+y<11 && checkForShips(builtShip, xPlace, yPlace)) {
      canBePlaced=true;
    }
    return canBePlaced;
  };


  const checkForShips =(builtShip, xPlace, yPlace) =>{
    const x=xPlace;
    let y=yPlace;
    const length=builtShip.lengthStatus;
    let canBePlaced= false;
    for (let i=0; i<length; i++) {
      if (board[x][y]==='') {
        return canBePlaced=true;
      } else {
        canBePlaced=false;
        break;
      }
      y++;
    }
    return canBePlaced;
  };

  for (let row=0; row<board.length; row++) { // undefined cant be referenced
    for (let column=0; column<board[row].length; column++) {
      board[row][column] = '';
    }
  } // the outter loop wont end until the inner ends


  const positionShip= (builtShip, x, y) =>{
    board[x][y]='O';
  };
  return {getBoard, positionShip, spaceChecker, checkForShips};
}
;

module.exports= gameBoards;
