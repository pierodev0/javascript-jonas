"use strict";
const log = (...e) => console.log(...e);


const frutas = ["🍎","🍌","🍓"];

frutas[0] = "🍇"

log(frutas[frutas.length - 1 ]); //Ultimo eleemnto 

const piero = ["Piero","Bayona",frutas]
log(piero)

const calcAge = (birthyear) => 2022 - birthyear;

const years = [1990, 2000, 1985];
const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length - 1])];
log(ages)

