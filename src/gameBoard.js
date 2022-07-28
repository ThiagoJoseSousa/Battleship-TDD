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
        switch (builtShip.name) {
          case 'Carrier':
            board[xPlace][newYPosition] = 'A';
            break;
          case 'Battleship':
            board[xPlace][newYPosition] = 'B';
            break;
          case 'Cruiser':
            board[xPlace][newYPosition] = 'C';
            break;
          case 'Submarine':
            board[xPlace][newYPosition] = 'D';
            break;
          case 'Destroyer':
            board[xPlace][newYPosition] = 'E';
            break;
        }
        newYPosition++;
      }
    }
  };
  const receiveAttack= ( x, y) => {
    const item= board[x][y];
    switch (item) {
      case 'A':
        board[x][y]= 'hit';
        builtShip.lengthStatus -=1;
        break;
      case 'B':
        board[x][y]= 'hit';
        builtShip1.lengthStatus -=1;
        break;
      case 'C':
        board[x][y]= 'hit';
        builtShip2.lengthStatus -=1;

        break;
      case 'D':
        board[x][y]= 'hit';
        builtShip3.lengthStatus -=1;
        break;
      case 'E':
        board[x][y]= 'hit';
        builtShip4.lengthStatus -=1;
        break;
      case '':
        board[x][y]= 'miss';
        break;
      case 'miss':
        break;
    }
  };
  const builtShip = {name: 'Carrier', lengthStatus: 5};
  positionShip(builtShip, 4, 4);
  builtShipReturn= ()=> {
    return builtShip;
  }; // Ships must be created inside gameboard, or the attacks wont work! position only would work if the ships were returned also.
  // It's the scope magic.

  const allSunk= () => {
    if (builtShip.lengthStatus ===0) { // +builtShip1.lengtStatus + builtShip2.lengtStatus + builtShip3.lengtStatus + builtShip4.lengtStatus
      return true;
    } else {
      return false;
    }
  };

  return {getBoard, positionShip, spaceChecker, checkForShips, receiveAttack, builtShipReturn, allSunk};
}
;

module.exports= gameBoards;
