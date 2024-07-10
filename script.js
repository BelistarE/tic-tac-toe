//erase starting screen
const startButton = document.getElementById('start');
const playerNameDiv = document.querySelector('.player-name');

document.addEventListener('DOMContentLoaded', function() {
    const inputFormContainer = document.getElementById('inputFormContainer');
  
    startButton.addEventListener('click', function() {
      inputFormContainer.classList.add('hidden');
  
      inputFormContainer.addEventListener('transitionend', function() {
        inputFormContainer.remove();
        setTimeout(function() {
            playerNameDiv.style.display = 'flex'; 
          }, 400);
        
      }, { once: true }); // { once: true } ensures the event listener is triggered only once
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
  