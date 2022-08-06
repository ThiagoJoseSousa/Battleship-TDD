const gameLoop = require('./gameLoop.js').default;
const playerFactory= require('./Player.js').default;

const createGameboard = (playerObj, enemyObj) => {
  const boardDiv= document.getElementById(playerObj.player+'Div');
  boardDiv.textContent=''; // to when updating the gameboard

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
          coordinate.classList.add('computerBoard');
        }
        if (element==='') {
          coordinate.classList.add('fogofwar');
        }
        if (element ==='miss') {
          coordinate.classList.add('miss');
        }
        if (element==='hit') {
          coordinate.classList.add('hit');
        }
        boardDiv.appendChild(coordinate);
      });
    });
  };
  const receiveClick= (e) => {
    const x= e.target.getAttribute('data-x');
    const y=e.target.getAttribute('data-y');
    if (enemyObj.createBoard.allSunk(playerObj.player) && playerObj.createBoard.allSunk(enemyObj.player)) {
      const checker=enemyObj.attack(x, y, playerObj);
      if (checker===true) {
        computerTurn();
      }
    }
    createGameboard(playerObj, enemyObj);
  };


  function computerTurn() {
    playerObj.attack(4, 4, enemyObj);
    createGameboard(enemyObj, playerObj);
  }
  // };
  createGrid();
  return createGrid;
};

module.exports= createGameboard;
