'use strict';
/*====================================
Metodo filter
====================================*/
//Filtrar los depositos de la cuenta
const deposits = movements.filter(mov => mov > 0);
//Filtrar los retiros de la cuenta
const retiros = movements.filter( mov => mov < 0);
console.log(deposits);
console.log(retiros);