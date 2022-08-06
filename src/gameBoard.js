const ship= require('./shipFactory.js');


const gameBoards = () => {
  const board = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10),
    new Array(10), new Array(10), new Array(10), new Array(10), new Array(10)];
    // 10 array elements with an array that has 10 inside, grid.

  const getBoard = () => {
    return board;
  };

  const builtShip = ship( 5, 'Carrier');
  const builtShip1 = ship( 4, 'Battleship');
  const builtShip2 = ship( 3, 'Cruiser');
  const builtShip3 = ship( 3, 'Submarine');
  const builtShip4 = ship( 2, 'Destroyer');


  const spaceChecker= (builtShip, xPlace, yPlace) => { // used for nothing
    const x= xPlace;
    const y= yPlace;
    const length=builtShip.lengthStatus;

    let canBePlaced = false;
    if (length+y<10 && checkForShips(builtShip, xPlace, yPlace)) {
      canBePlaced=true;
    }

    const getCanBePlaced= ()=> {
      return canBePlaced;
    };
    return getCanBePlaced;
  };


  for (let row=0; row<board.length; row++) { // undefined cant be referenced
    for (let column=0; column<board[row].length; column++) {
      board[row][column] = '';
    }
  } // the outter loop wont end until the inner ends
  const checkForShips =(builtShip, xPlace, yPlace) =>{
    const x=xPlace;
    let y=yPlace;
    const length=builtShip.lengthStatus;
    let canBePlaced= false;
    for (let i=0; i<length; i++) {
      if (board[x][y]==='') {
        canBePlaced=true;
      } else {
        canBePlaced=false;
      }
      ++y;
    }
    const getCanBePlaced=()=> {
      return canBePlaced;
    };
    return getCanBePlaced;
  };

  // CHECK FOR SHIP IS ALWAYS RETURNING FALSE
  const positionShip= (builtShip, x, y) =>{
    const xPlace=x;
    let newYPosition = y;
    const length= builtShip.lengthStatus;
    const checker= checkForShips(builtShip, xPlace, newYPosition);
    if (newYPosition+length<10 && checker()===true) {
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
      return true;
    } else {
      return false;
    };
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

      default: return false;
    }
    return true;
  };

  const setShipPosition= (shipObject) => {
    let x = Math.floor(Math.random()*10);
    let y = Math.floor(Math.random()*10);
    let checker = positionShip(shipObject, x, y);
    while (checker===false) {
      x = Math.floor(Math.random()*10);
      y = Math.floor(Math.random()*10);
      checker= positionShip(shipObject, x, y);
    }
    // let x = random number, while positionShip is a failure, find another number.
  };
  setShipPosition(builtShip);
  setShipPosition(builtShip1);
  setShipPosition(builtShip2);
  setShipPosition(builtShip3);
  setShipPosition(builtShip4);

  // Ships must be created inside gameboard, or the attacks wont work! position only would work if the ships were returned also.
  // It's the scope magic.

  const allSunk= (getname) => {
    if ( builtShip.lengthStatus===0 && builtShip1.lengthStatus===0 && builtShip2.lengthStatus===0 && builtShip3.lengthStatus===0 && builtShip4.lengthStatus===0 ) {
      alert(getname +' won, game has ended.');
      return false;
    } else {
      return true;
    }
  };


  return {board, getBoard, positionShip, spaceChecker, checkForShips, receiveAttack, allSunk};
}
;

module.exports= gameBoards;
