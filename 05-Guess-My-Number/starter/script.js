'use strict';

const message = document.querySelector('.message');
const check = document.querySelector('.check');
const $score = document.querySelector('.score');
const $again = document.querySelector('.again');


// const secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = 10;
let score = 5;
$score.textContent = score;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;


check.addEventListener('click', e => {
  const guess = Number(document.querySelector('.guess').value);
  //When there is not input
  if (guess === 0) {
    message.textContent = '🛑 Invalid number';

    //When player wins
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    check.disabled = true;
    check.classList.add('disable');

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high';
      score--;
      $score.textContent = score;
    } else {
      message.textContent = '😨 You lost the game';
      $score.textContent = 0;      
      check.disabled = true;
      check.classList.add('disable');
    }
    //When guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low';
      score--;
      $score.textContent = score;
    } else {
      message.textContent = '😨 You lost the game';
      $score.textContent = 0;
      check.disabled = true;
      check.classList.add('disable');
    }
  }
});



$again.addEventListener('click', (e) =>{
  message.textContent = "Start guessing...";
  score = 5;
  $score.textContent = score;
  check.disabled = false;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';


  check.classList.remove('disable');
  document.querySelector('.guess').value = "";
});



