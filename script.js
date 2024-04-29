'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥳 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
const highScore = document.querySelector('.score');
const message = document.querySelector('.message');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //When there is no input
  if (!guess) {
    message.textContent = '⛔ No Number!';

    //When the player wins
  } else if (guess === secretNumber) {
    message.textContent = '🥳 Correct Number!';
    highScore.textContent = score;

    //When the player guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too High!';
      score--;
      highScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      highScore.textContent = 0;
    }

    //When the player guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too Low!';
      score--;
      highScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      highScore.textContent = 0;
    }
  }
});
