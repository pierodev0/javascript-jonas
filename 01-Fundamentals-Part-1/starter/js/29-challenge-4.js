const log = (...e) => console.log(...e);
/* 
Steven quiere construir una calculadora de propinas muy simple para cada vez que vaya a comer a un restaurante. En su país, lo habitual es dejar una propina del 15% si el valor del billete está entre 50 y 300. Si el valor es diferente, la propina es del 20%.

Sus tareas:
1. Calcula la propina, según el valor del billete. Cree una variable llamada 'propina' para esto. No está permitido usar una declaración if/else � (Si le resulta más fácil, puede comenzar con una declaración if/else y luego tratar de convertirla en una declaración ternaria operador)
2. Imprima una cadena en la consola que contenga el valor de la factura, la propina y el valor final (factura + propina). Ejemplo: “El billete fue 275, la propina fue 41,25 y el valor total 316,25”
Datos de prueba:
§ Dato 1: Test para valores de billete 275, 40 y 430
Sugerencias:
§ Para calcular el 20% de un valor, simplemente multiplícalo por 20/100 = 0,2
§ El valor X está entre 50 y 300, si es >= 50 && <= 300 � */

const billete =430;
const propina = billete >= 50 && billete <= 300 ? 0.15 * billete : 0.20 * billete;

log(`Billete : ${billete}`)
log(`Propina : ${propina}`)
log(`Factura : ${billete + propina}`)
