const gameLoop = require('./gameLoop.js').default;
const playerFactory= require('./Player.js').default;

const createGameboard = (playerObj, enemyObj) => {
  const boardDiv= document.getElementById(playerObj.player+'Div');

  function createGrid() {
    playerObj.createBoard.board.forEach((element) => {
      const x = Number(playerObj.createBoard.board.indexOf(element)); // returns the index of the board element its on
      let y = 0;
      playerObj.createBoard.board[x].forEach((element) => {
        const coordinate = document.createElement('div'); // creates a div for each x/y
        coordinate.dataset.x = x;
        coordinate.dataset.y = y;
        y = y + 1;

        coordinate.classList.add('squares');
        if (enemyObj.player === 'player') {
          coordinate.addEventListener('click', receiveClick, false);
        }
        boardDiv.appendChild(coordinate);
      });
    });
  };
  const receiveClick= (e) => {
    const x= e.target.getAttribute('data-x');
    const y=e.target.getAttribute('data-y');
    if (enemyObj.turnVariable===false && enemyObj.createBoard.allSunk() && playerObj.createBoard.allSunk()) {
      enemyObj.attack(x, y, playerObj);
    }
    computerTurn();
  };
  // if (enemyObj.player==='player' && enemyObj.turnVariable===true &&
  // playerObj.turnVariable!=='Game has ended') { // the loop just happens one time


  function computerTurn() {
    playerObj.attack(4, 4, enemyObj);
  }
  // };
  createGrid();
  return createGrid;
};

module.exports= createGameboard;
