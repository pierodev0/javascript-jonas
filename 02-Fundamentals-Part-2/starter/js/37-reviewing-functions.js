"use strict";
const log = (...e) => console.log(...e);

const calcAge = (birthYear) => 2022 - birthYear;

const edadHastaJubilacion = function (birthYear, firstname) {    

    const year  = calcAge(birthYear);

    const jubilacion = 65 - year;

    if(jubilacion > 0){
        log(`${firstname} se jubilara en ${jubilacion} años `);
        return jubilacion;
    } else {
        log(`${firstname} ya te jubilaste 🎓`);
        return -1;
    }

    

}

