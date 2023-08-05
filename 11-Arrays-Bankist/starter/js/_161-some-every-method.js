console.log(movements);

//Equality
console.log(movements.includes(-130))

//SOME: Condition
console.log(movements.some(item => item === -130));

const anyDeposits = movements.some(item => item > 0);
console.log(anyDeposits)

//EVERY: Retorne true si todos los elementos cumple con la funcion
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))
