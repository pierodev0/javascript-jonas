'use strict';

const check = document.querySelector('.check');
const $score = document.querySelector('.score');
const $again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let secretNumber = 10;
let score = 5;
$score.textContent = score;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;

function disableButton(estate) {
  if (estate) {
    check.disabled = true;
    check.classList.add('disable');
  } else if (estate === false) {
    check.disabled = false;
    check.classList.remove('disable');
  }
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

check.addEventListener('click', e => {
  const guess = Number(document.querySelector('.guess').value);
  //When there is not input
  if (guess === 0) {
    displayMessage('🛑 Invalid Number');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    disableButton(true);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is to high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('📈 Too high')
        : displayMessage('📈 Too low');
      score--;
      $score.textContent = score;
      //When player lost
    } else {
    document.querySelector('body').style.backgroundColor = 'rgb(255, 92, 92)';
      displayMessage('😨 You lost the game');
      $score.textContent = 0;
      document.querySelector('.number').textContent = "";
      const img = document.createElement('img');
      img.setAttribute('src', 'Calavera_pixel_art_png.png');
      document.querySelector('.number').append(img);
      disableButton(true);
    }
  }
});

//Boton again
$again.addEventListener('click', e => {
  displayMessage('Start guessing...');
  score = 5;
  $score.textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  const $img = document.querySelector('.number img');
  if($img){
    $img.remove();
  }
  document.querySelector('.guess').value = '';
  disableButton(false);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
});



















function log(text) {
    const body = document.querySelector('body');
    const padre = document.createElement('div');
    padre.style.cssText =
      'font-family: Helvetica, sans-serif; padding: 10px 20px; position: absolute; width: 80%; max-width: 800px; bottom: 0; right: 20px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; color: rgb(0, 0, 0); font-size: 16px; border-radius: 10px 10px 0 0; background-color: white;';
    const p = document.createElement('p');
    typeof text === 'string' ? (p.style.color = 'green') : '';
    typeof text === 'number' ? (p.style.color = 'blue') : '';
    typeof text === 'undefined' ? (p.textContent = 'undefined') : '';
  
    p.innerHTML = `<pre>${text}</pre>`;
    padre.append(p);
    body.append(padre);
  
    console.log(text);
  }
  