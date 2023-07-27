"use strict";
const log = (...e) => console.log(...e);

//Para datos ordenados
const pieroArray = [
    "Piero",
    "Bayona",
    2022 - 2000,
    "estudiante",
    ["guitarra,piano,flauta"]
]

//Datos no estructurados
const piero = { //Literal Sintax
    firstName: "Piero",
    lastName: "Bayona",
    age: 2022 - 2000,
    job: "estudent",
    instruments: ["guitarra,piano,flauta"]

}

log(pieroArray[pieroArray.length - 1])
log(piero.instruments);