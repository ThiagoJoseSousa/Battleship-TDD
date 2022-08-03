const gameLoop = require('./gameLoop');
const playerFactory= require('./Player');

const createGameboard = (playerObj, enemyObj) => {
  const boardDiv= document.getElementById(playerObj.player+'Div');
  boardDiv=

  const createGrid = ()=> {
    playerObj.createBoard.board.forEach((element) => {
      const x = element;
      const y=0;
      playerObj.createBoard.board[x].forEach((element)=>{
        y=element;
        const coordinate= document.createElement('div'); // creates a div for each x/y
        coordinate.dataset.x=x;
        coordinate.dataset.y=y;
        y= y+1;

        if (enemyObj.player==='player') {
          coordinate.addEventListener(click, receiveClick(e));
        }
        boardDiv.appendChild(coordinate);
      });
    });
  };
  const receiveClick= (e) => {
    const x= e.target.getAttribute('data-x');
    const y=e.target.getAttribute('data-y');
    const playerTurnVar=enemyObj.returnTurn();
    if (playerTurnVar===false && playerTurnVar!=='Game has ended' &&
    playerObj.returnTurn()!=='Game has ended' ) {
      enemyObj.attack(x, y, playerObj);
      // createGameboard(playerObj, enemyObj); updates the board
    }
  };
if (enemyObj.player==='player' && enemyObj.returnTurn()===true) {
    computer.attack(4,4,enemyObj)
};
    // while (playerObj.returnTurn()===true) {
    //  computer.attack(4, 4, player);
    // }
};

