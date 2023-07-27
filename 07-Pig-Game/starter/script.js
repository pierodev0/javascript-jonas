'use strict';
//Selecting elements

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePLayer = 0;

btnRoll.addEventListener('click', () => {
  //Generar numero al azar del uno al 6
  let dice = Math.trunc(Math.random() * 6) + 1;

  //Mostrar el dado
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Verifica si el dado es 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Cambiar jugador
  }
});
