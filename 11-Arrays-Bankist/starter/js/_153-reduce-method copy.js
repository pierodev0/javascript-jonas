'use strict';
/*====================================
Metodo reduce
====================================*/
//Sumar los numeros
const balance = movements.reduce((acc, curr) => acc + curr,0);
console.log(balance)

//Obtener el valor mas alto
const maxValue = movements.reduce((acc, curr) => {
  if(acc > curr){
    return acc;
  } else {
    return curr;
  }
})

console.log(maxValue)