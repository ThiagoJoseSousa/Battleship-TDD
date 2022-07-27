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
    if (length+y<11) {
      canBePlaced=true;
    }
    return canBePlaced;
  };

  const positionShip= (x, y) =>{
    board[x][y] ='O';
  };
  return {getBoard, positionShip, spaceChecker};
};

module.exports= gameBoards;
