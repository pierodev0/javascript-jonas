const log = (...e) => console.log(...e);

const age = 18;

// Operador ternario es una expresion -> Siempre devuelve un valor
const drink = age > 18 ? "vino 🍷" : "agua 🚰";
log(drink);

let drink2;
if( age > 18){
    drink2 = "vino 🍷";
} else {
    drink2 = "agua 🚰";
}
log(drink2)

log(`Me gusta beber ${age > 18 ? "vino 🍷" : "agua 🚰"}`);
