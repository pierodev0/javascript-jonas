const arr = [1, 2, [3, 4, 5]];

console.log(arr.flat());

const arrDeep = [[1, 2, 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
/*====================================
FLAT -> 
====================================*/
const overalBalance = accounts
  .map(account => account.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);

console.log(overalBalance)
/*====================================
FLATMAP
====================================*/
const overalBalance2 = accounts
  .flatMap(account => account.movements)
  .reduce((acc, curr) => acc + curr, 0);

console.log(overalBalance2)