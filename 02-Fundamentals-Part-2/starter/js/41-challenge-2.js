"use strict";
const log = (...e) => console.log(...e);
/* 
Steven todavía está construyendo su calculadora de propinas, usando las mismas reglas que antes:
Propina del 15% del billete si el valor del billete está entre 50 y 300, y si el valor es diferente, la propina es del 20%. Sus tareas:
1. Escriba una función 'calcTip' que tome cualquier valor de factura como entrada y devuelva la propina correspondiente, calculada según las reglas anteriores (puede consultar el código del desafío de la calculadora de la primera propina si lo necesita). Utilice el tipo de función que más le guste. Pruebe la función utilizando un valor de factura de 100
2. ¡Y ahora usemos arreglos! Entonces cree una matriz 'facturas' que contenga los datos de prueba a continuación
3. Cree una matriz de 'propinas' que contenga el valor de la propina para cada factura, calculado a partir de la función que creó anteriormente
4. Bonificación: cree una matriz 'total' que contenga los valores totales, por lo que la factura + propina
Datos de prueba: 125, 555 y 44
Sugerencia: ¡Recuerde que una matriz necesita un valor en cada posición, y ese valor en realidad puede ser el valor devuelto por una función! Entonces, puede simplemente llamar a una función como valores de matriz (así que no almacene primero los valores de punta en variables separadas, sino directamente en la nueva matriz) �
*/

const billete = 430;
const propina = billete >= 50 && billete <= 300 ? 0.15 * billete : 0.20 * billete;

const calcTip = (billete) => {
    let propina = 0;
    if (billete >= 50 && billete <= 300) {
        propina = billete * 0.15
        return propina
    } else {
        propina = billete * 0.20
        return propina
    }
}
const facturas = [125, 555, 44];
const propinas = [];
const total = [];

propinas.push(calcTip(facturas[0]));
propinas.push(calcTip(facturas[1]));
propinas.push(calcTip(facturas[2]));

total.push(facturas[0] + propinas[0])
total.push(facturas[1] + propinas[1])
total.push(facturas[2] + propinas[2])

log(facturas);
log(propinas);
log(total);
