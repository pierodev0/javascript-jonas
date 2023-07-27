'use strict';

const boton = document.querySelector('.check');
const number = document.querySelector('.guess');
const message = document.querySelector('.message');
let score = 5;

const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

boton.addEventListener('click', e => {
  const guess = Number(number.value);
  if (!guess) {
    mostrarMensaje('Numero no debe estar vacio');
  } else {
    if (guess === secretNumber) {
      mostrarMensaje('Ganaste el juego');
      document.querySelector("body").style.backgroundColor = "#60b347";
    } else if (guess > secretNumber){
      if(score > 1){
        mostrarMensaje("Numero muy alto");
        score--;
        mostrarScore(score);
      } else {        
        mostrarMensaje("Perdiste el juego 😫");
        score = 0;
        mostrarScore(score)
      }
      
    } else if( guess < secretNumber){
      if(score > 1){
        mostrarMensaje("Numero muy bajo");
        score--;
        mostrarScore(score);
      } else {        
        mostrarMensaje("Perdiste el juego 😫");
        score = 0;
        mostrarScore(score)
      }
    }
  }
});

function mostrarMensaje(mensaje) {
  const alerta = document.querySelector('.message');
  alerta.textContent = mensaje;
}

function mostrarScore(mensaje) {
  const alerta = document.querySelector('.score');
  alerta.textContent = mensaje;
}
