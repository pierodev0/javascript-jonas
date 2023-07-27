"use strict";
const log = (...e) => console.log(...e);

const piero = { //Literal Sintax
    firstName: "Piero",
    lastName: "Bayona",
    age: 2022 - 2000,
    job: "estudent",
    instruments: ["guitarra","piano","flauta"]

}

log(piero);
log(piero.firstName);
log(piero['firstName']);

const nameKey = "Name";

//En la sintaxis de corchetes se puede colocar cualquier expreseion
log(piero['first' + nameKey])
log(piero['last' + nameKey])

const interestedIn = "hola";

if (piero[interestedIn]) {
    log(piero[interestedIn]);
} else {
    log("Property don't exists")
}

//Add propertys
piero.location = "Peru";
piero["hobby"] = "Programming"
log(piero)

log(`${piero.firstName} toca ${piero.instruments.length} instrumentos y su instrumento favorito es la ${piero.instruments[2]}`);
