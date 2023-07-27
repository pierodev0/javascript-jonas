"use strict";
const log = (...e) => console.log(...e);

const piero = [
    "Piero",
    "Bayona",
    2022 - 2000,
    "estudiante",
    ["guitarra,piano,flauta"],
    true
]
const types = [];

for (let i = 0; i < piero.length; i++) {
    //Reading array
    log(piero[i], typeof piero[i]);
    
    //Filling array
    // types[i] = typeof piero[i]
    types.push(typeof piero[i])
}

log(types);


const years = [2000,1980, 1991,2003];
const ages = [];

for(let i = 0; i < years.length;i++){
    ages[i] = 2037 - years[i];
}

log(ages)

log("----only string----")
for(let i = 0; i < piero.length;i++){
    if(typeof piero[i] !== "string") continue;
    log(types[i] = piero[i])
   
}

log("----Break with number----")
for(let i = 0; i < piero.length;i++){
    if(typeof piero[i] === "number") break;
    log(types[i] = piero[i])
   
}