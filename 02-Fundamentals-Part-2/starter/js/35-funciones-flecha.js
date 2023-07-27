"use strict";
const log = (...e) => console.log(...e);


const calcularEdad = birthYear => 2022 - birthYear;

const calcularEdad2 = birthYear => birthYear === 0 ||  birthYear === "" ? false : 2022 - birthYear;

const calcularEdad3 = function(birthYear){
    if(birthYear === 0 || birthYear === ""){
        return false
    } else {
        return 2022 - birthYear;
    }
}

const edadHastaJubilacion = (birthYear, firstname) => {

    /* const year = birthYear === 0 || birthYear === "" ?  false : 2022 - birthYear;
    log("año",year);
    const jubilacion = year ? 65 - year : false;
    return `${firstname} se jubilara ${jubilacion}` */

    const year = 2022 - birthYear;
    const jubilacion = 65 - year;

    return `${firstname} se jubilara ${jubilacion}` 

}

log(edadHastaJubilacion(0,"Juan"))

const edad = 18;
const eresMayorEdad = edad => edad >= 18 ? "Eres mayor de edad 😎" : "Eres menor de edad 😪";

function eresMayorEdad2 (edad){
    if(edad >= 18){
        return "Eres mayor de edad 😎";
    } else {
        return "Eres menor de edad 😪";
    }
}

const eresMayorEdad3 = edad => {
    if(edad >= 18){
        return "Eres mayor de edad 😎";
    } else {
        return "Eres menor de edad 😪";
    }
}

const eresMayorEdad4 = function(edad){
    if(edad >= 18){
        return "Eres mayor de edad 😎";
    } else {
        return "Eres menor de edad 😪";
    }
}

const areYouSad = response => response === "si" ? "😭 I feel you" : "😋 You are happy";
