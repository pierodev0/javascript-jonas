'use strict'
console.log(movements);

// FIND -> Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
const fistWithDrawal = movements.find(val => val < 0);
console.log(fistWithDrawal)

console.log(accounts)
const account = accounts.find(obj => obj.owner === "Jessica Davis");
console.log(account)

//Con bucle for of
let accountFind = [];
for(const obj of accounts){
    if(obj.owner === "Sarah Smith"){
        accountFind = obj;
        break;
    }
}

console.log(accountFind)