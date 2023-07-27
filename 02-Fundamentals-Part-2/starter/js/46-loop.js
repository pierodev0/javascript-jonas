"use strict";
const log = (...e) => console.log(...e);


log("Lifting weight repetion 1")
log("Lifting weight repetion 2")
log("Lifting weight repetion 3")

//se sigue ejecutando mientras la ejecucion sea TRUE;
for(let rep = 1; rep <= 10;rep++){
    log(`Lifting weight repetion ${rep}`)
}