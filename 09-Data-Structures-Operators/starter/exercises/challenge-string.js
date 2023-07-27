/*
Escriba un programa que reciba una lista de nombres de variables escritos en underscore_case y conviértalos a camelCase.

La entrada provendrá de un área de texto insertada en el DOM (consulte el código a continuación), y la conversión se realizará cuando se presione el botón.

ESTOS DATOS DE PRUEBA (pegados en el área de texto)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

DEBERÍA PRODUCIR ESTA SALIDA (5 salidas separadas de console.log)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅


PISTA 1: Recuerda qué carácter define una nueva línea en el área de texto 😉
PISTA 2: La solución solo necesita funcionar para una variable formada por 2 palabras, como a_b
PISTA 3: Comienza sin preocuparte por el ✅. Aborde eso solo después de que tenga funcionando la conversión de nombre de variable 😉
PISTA 4: Este desafío es difícil a propósito, así que empieza a ver la solución en caso de que te quedes atascado. ¡Luego haz una pausa y continúa!

¡Después, pruebe con sus propios datos de prueba!
*/

const convertCamelCase = (string = "") => {

  
  //Identifacar guion
  const stringUnderLine = string.trim("").toLocaleLowerCase().split("_");

  //Validar que exista dos palabras
  if(stringUnderLine.length <= 1){
    return "No valido";
  } 

  const stringFormated = [stringUnderLine[0]]

  for (let i = 1; i < stringUnderLine.length; i++) {
    const item = stringUnderLine[i]
    stringFormated.push(item.replace(item[0],item[0].toUpperCase()))
  }

  return stringFormated.join("")
}


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


const flightsFormated = flights.split("+");

const flight2 = []
for(const item of flightsFormated){ 
    flight2.push(item.replaceAll("_"," ").trim());
}

console.log(flight2)