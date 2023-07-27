'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const usdToPEN = 3.7;

//El map()método crea una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento de la matriz que llama.
const PENarray = movements.map( usd => usd * usdToPEN);

console.log(movements)
console.log(PENarray)

const movementDescription = movements.map((movement, i, arr) => {  
  return `Movimiento: ${i + 1} Tu ${movement > 0 ? "depositaste" : "retiraste"}: ${movement}`
});

console.log(movementDescription)