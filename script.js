'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
const scoreMessage = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const handleGuess = function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    //When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    scoreMessage.textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        '.label-highscore'
      ).textContent = `🥇 Highscore: ${highScore}`;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      scoreMessage.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreMessage.textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }

    //   //When the player guess too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     message.textContent = '📈 Too High!';
    //     score--;
    //     scoreMessage.textContent = score;
    //   } else {
    //     message.textContent = '💥 You lost the game!';
    //     scoreMessage.textContent = 0;
    //     document.querySelector('body').style.backgroundColor = 'red';
    //   }

    //   //When the player guess too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     message.textContent = '📉 Too Low!';
    //     score--;
    //     scoreMessage.textContent = score;
    //   } else {
    //     message.textContent = '💥 You lost the game!';
    //     scoreMessage.textContent = 0;
    //     document.querySelector('body').style.backgroundColor = 'red';
    //   }
    // }
  }
};

document.querySelector('.check').addEventListener('click', handleGuess);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    handleGuess();
  }
});

const again = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    scoreMessage.textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
