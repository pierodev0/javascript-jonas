"use strict";
const log = (...e) => console.log(...e);

//Funcion declarada -> Se pueden acceder antes de declararla
log(calcularEdad1(2001));
function calcularEdad1(year){

    const date = new Date();
    const yearNow = date.getFullYear();

    if( year >= 1900 && year <= yearNow && year !== 0 && year !== ""){
        return yearNow - year;
    } else {
        return false
    }
}

//Funcion expresada
const calcularEdad2 = function(year){
    return 2022 - year;
}
log(calcularEdad2(""));


