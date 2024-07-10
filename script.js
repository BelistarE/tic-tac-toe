//erase starting screen
const startButton = document.getElementById('start');
const playerNameDiv = document.querySelector('.player-name');
const container = document.getElementById('container');
const inputFormContainer = document.getElementById('inputFormContainer');

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
 }
 