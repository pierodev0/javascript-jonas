"use strict";
const log = (...e) => console.log(...e);
/* 
¡Volvamos a los dos equipos de gimnasia, los delfines y los koalas! Hay una nueva disciplina de gimnasia, que funciona de manera diferente. Cada equipo compite 3 veces y luego se calcula el promedio de los 3 puntajes (es decir, un puntaje promedio por equipo). 
Un equipo solo gana si tiene al menos el doble de la puntuación media del otro equipo. De lo contrario, ¡ningún equipo gana!
Sus tareas:
1. Cree una función de flecha 'calcAverage' para calcular el promedio de 3 puntajes
2. Usa la función para calcular el promedio de ambos equipos
3. Cree una función 'checkWinner' que tome la puntuación promedio de cada equipo como parámetros ('avgDolhins' y 'avgKoalas'), y luego registre el ganador en la consola, junto con los puntos de victoria, de acuerdo con la regla anterior. Ejemplo: "Koalas ganan (30 vs. 13)"
4. Utilice la función 'checkWinner' para determinar el ganador de los datos 1 y 2 5. Ignore los sorteos esta vez

Datos de prueba:
§ Dato 1: Delfines puntúan 44, 23 y 71. Koalas puntúan 65, 54 y 49
§ Dato 2: Delfines puntúan 85, 54 y 41. Koalas puntúan 23, 34 y 27
Sugerencias:
§ Para calcular el promedio de 3 valores, sumarlos todos juntos y dividir por 3
§ Para verificar si el número A es al menos el doble del número B, verifique que A >= 2 * B.
Aplique esto a los puntajes promedio del equipo
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDelphins = calcAverage(85, 54, 41).toFixed(1);
const scoreKoalas = calcAverage(23, 34, 27).toFixed(1);

const checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins >= avgKoalas * 2) {
        log(`Delphin ganan (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgDolphins * 2 <= avgKoalas) {
        log(`Koalas ganan (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgDolphins === avgKoalas) {
        log(`Equipos empatan (${avgDolphins} vs ${avgKoalas})`)
    } else {
        log(`Ningun equipo ganan (${avgDolphins} vs ${avgKoalas})`)
    }
}
checkWinner(576, 111);