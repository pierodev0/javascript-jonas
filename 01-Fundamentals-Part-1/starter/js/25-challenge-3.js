const log = (...e) => console.log(...e);

/* Hay dos equipos de gimnasia, Dolphins y Koalas. Compiten entre sí 3 veces. ¡El ganador con el puntaje promedio más alto gana un trofeo!
Sus tareas:
1. Calcule el puntaje promedio para cada equipo, usando los datos de prueba a continuación
2. Compare los puntajes promedio del equipo para determinar el ganador de la competencia e imprímalo en la consola. No olvides que puede haber un empate, así que prueba eso también (empatar significa que tienen el mismo puntaje promedio)
3. Bono 1: Incluya un requisito para un puntaje mínimo de 100. Con esta regla, un equipo solo gana si tiene un puntaje más alto que el otro equipo y, al mismo tiempo, un puntaje de al menos 100 puntos. Sugerencia: use un operador lógico para probar el mínimo
puntuación, así como múltiples bloques else-if �
4. Bonificación 2: ¡La puntuación mínima también se aplica a un empate! Entonces, un empate solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo gana el trofeo. */

// § Dato 1: Los delfines puntúan 96, 108 y 89. Los koalas puntúan 88, 91 y 110
// § Bonificación de datos 1: los delfines obtienen 97, 112 y 101. Los koalas obtienen 109, 95 y 123
// § Bonificación de datos 2: los delfines obtienen 97, 112 y 101. Los koalas obtienen 109, 95 y 106


let delfines = (97 + 112 +101) / 3;
let koalas = (109 + 95 + 106) / 3;

log(`Puntaje Delfines: ${delfines}`)
log(`Puntaje Koalas : ${koalas}`)

if(delfines > koalas && delfines >= 100){
    log("Ganador delfines 🏆");
} else if (delfines < koalas && koalas >= 100){
    log("Ganador koalas 🏆")
} else if (koalas === delfines && koalas >= 100 && delfines >= 100){
    log("Equipos empatan")
} else {
    log("Nadie gano el trofeo 😢")
}

