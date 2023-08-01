'use strict';

console.log(movements);

const EURO_TO_USD = 1.2;

const totalDepositUSD = movements
  .filter(value => value > 0)
  .map(value => value * EURO_TO_USD)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalDepositUSD);
