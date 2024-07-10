//erase starting screen
const startButton = document.getElementById('start');
const playerNameDiv = document.querySelector('.player-name');
const container = document.getElementById('container');
const inputFormContainer = document.getElementById('inputFormContainer');
const headerTag = document.createElement('h1');
const nameP = document.createElement('p');
const winnerDiv = document.querySelector('.winner');
const buttonContainer = document.createElement('div');
const buttonRestart = document.createElement('button');
const buttonNewGame = document.createElement('button');


document.addEventListener('DOMContentLoaded', function() {

  startButton.addEventListener('click', function() {
    inputFormContainer.classList.add('hidden');
    
    inputFormContainer.addEventListener('transitionend', function() {
      inputFormContainer.classList.add('hidden');
      setTimeout(function() {
        playerNameDiv.style.display = 'flex'; 
        container.style.display = 'grid';
      }, 350);
    });
  });
});


  //change symbols
  const changingSymbolsOne = document.getElementById('player1-symbol')
  const changingSymbolsTwo = document.getElementById('player2-symbol')
  changingSymbolsOne.addEventListener('click', (e) => {
    if (e.target.textContent === 'x') {
      e.target.textContent = 'o'
      changingSymbolsTwo.textContent = 'x'
      _xMark = false
    } else if (e.target.textContent === 'o') {
      e.target.textContent = 'x'
      changingSymbolsTwo.textContent = 'o'
      _xMark = true
    }
  })
  changingSymbolsTwo.addEventListener('click', (e) => {
    if (e.target.textContent === 'x') {
      e.target.textContent = 'o'
      changingSymbolsOne.textContent = 'x'
      _xMark = true
    } else if (e.target.textContent === 'o') {
      e.target.textContent = 'x'
      changingSymbolsOne.textContent = 'o'
      _xMark = false
    }
  })
  startButton.addEventListener('click', handleInput)
  function player (name, symbol) {
    return { name, symbol }
  }
  
  const beli = player('', '');
  const ian = player('','');

 function handleInput(){
  const playerOneName = document.getElementById('player1-input').value
  const playerTwoName = document.getElementById('player2-input').value

  const playerOneSymbol = document.getElementById('player1-symbol').textContent
  const playerTwoSymbol = document.getElementById('player2-symbol').textContent
  
  beli.name = playerOneName;
  ian.name = playerTwoName;
  beli.symbol = playerOneSymbol;
  ian.symbol = playerTwoSymbol;
  displayDetails()
 }

 function displayDetails() {
  const playerOneDisplayName = document.querySelector('.name1');
  playerOneDisplayName.textContent = beli.name;

  const playerTwoDisplayName = document.querySelector('.name2');
  playerTwoDisplayName.textContent = ian.name;

  const playerOneDisplaySymbol = document.querySelector('.symbol1');
  playerOneDisplaySymbol.textContent = beli.symbol;

  const playerTwoDisplaySymbol = document.querySelector('.symbol2')
  playerTwoDisplaySymbol.textContent = ian.symbol;
  //didnt work so im putting these here (i know its jank)
  nameP.textContent = `${beli.name}`
  nameP.textContent = `${ian.name}`
 }
 
 //gameboard

 startButton.addEventListener('click', function() {
  //for the end
  winnerDiv.style.display = 'none';
  buttonContainer.classList.add('button-container');
  buttonRestart.textContent = 'Restart';
  buttonNewGame.textContent = 'New Game';

  
  buttonRestart.addEventListener('click', resetGame);
  buttonNewGame.addEventListener('click', newGame);
  
  winnerDiv.appendChild(headerTag);
  winnerDiv.appendChild(nameP);
  buttonContainer.appendChild(buttonRestart);
  buttonContainer.appendChild(buttonNewGame);
  winnerDiv.appendChild(buttonContainer);


  const boxes = document.querySelectorAll('.box');
  let currentPlayer = beli;
  let board = Array(9).fill(null); //fill an empty array
  
  //function for when the user clicks a box
  boxes.forEach(box => {
    box.addEventListener('click', handleBoxClick);
  });
  
  function handleBoxClick(e) {
    const box = e.target;
    const boxIndex = box.getAttribute('data-box');

    // Prevent clicking an already filled box/return out of handleboxclick
    if (board[boxIndex] !== null) {
      return;
    }

    // Update the board and DOM
    board[boxIndex] = currentPlayer.symbol;
    box.textContent = currentPlayer.symbol;

    // Check for a win or draw
    if (checkWin()) {
      //setTimeout(() => alert(`${currentPlayer} wins!`), 10);
      
      winner(currentPlayer.symbol);
      return;
    }
    //draw condition
    if (board.every(cell => cell !== null)) {
      draw();
      return;
    }

    // Switch player
    currentPlayer = currentPlayer === beli ? ian : beli;
  }

  function checkWin() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winConditions.some(condition => {
      const [a, b, c] = condition;
      return board[a] && board[a] === board[b] && board[a] === board[c];
    });
  }

  function resetGame() {
    board = Array(9).fill(null);
    boxes.forEach(box => box.textContent = '');
    currentPlayer = beli;
    winnerDiv.style.display = 'none';

  }
});

function draw () {
  headerTag.textContent = 'The Game is a'
  nameP.textContent = 'DRAW'
  winnerDiv.style.display = ''
}

function winner (sign) {
  winnerDiv.style.display = ''
  if (sign === beli.symbol) {
    headerTag.textContent = 'Winner is'
    winnerDiv.style.display = ''
  } else if (sign === ian.symbol) {
    headerTag.textContent = 'Winner is'
    winnerDiv.style.display = ''
  }
}

function newGame () {
  location.reload();
}