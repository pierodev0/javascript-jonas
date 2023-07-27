const log = (...e) => console.log(...e);

//*TYPE CONVERSION ->Convetir manualmente
const inputYear = '2000';
numbearYear = Number(inputYear); //Convertir string a numero
log(numbearYear + 20); 

const nombre = "Piero";
log(Number(nombre)) // NAN -> Numero invalido
log(typeof Number(nombre)) // number

log(String(22)) //Convertir numero a String

//*TYPE COERSION -> Lo hace Javascript automaticamente
log("10" + 5) //105 -> Operador + Convierte a string
log("10" - "5") // 5 -> Operador - Convierte a numero
log("10" * "")


