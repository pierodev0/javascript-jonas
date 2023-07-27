'use strict';
// Coding Challenge #2

/* 
Volvamos al estudio de Julia y Kate sobre perros. Esta vez, quieren convertir las edades de los perros en edades humanas y calcular la edad promedio de los perros en su estudio.

Cree una función 'calcAverageHumanAge', que acepte una array de edades de perros ('edades'), y haga lo siguiente en orden:

1. Calcula la edad del perro en años humanos usando la siguiente fórmula: si el perro tiene <= 2 años, edadhumana = 2 * edadperro. Si el perro tiene > 2 años, humanAge = 16 + dogAge * 4.
2. Excluya todos los perros que tengan menos de 18 años humanos (que es lo mismo que tener perros que tengan al menos 18 años)
3. Calcula la edad humana promedio de todos los perros adultos (ya deberías saber por otros desafíos cómo calculamos los promedios 😉)
4. Ejecute la función para ambos conjuntos de datos de prueba

DATOS DE PRUEBA 1: [5, 2, 4, 1, 15, 8, 3]
DATOS DE PRUEBA 2: [16, 6, 10, 5, 6, 1, 4]

BUENA SUERTE
*/

const dogAges = [1,4,2,5,6,1,8];
const calcAverageHumanAge = (ages) => {
 
  const ageHUman = ages.filter(function (age){
    if(age < 2) {
      return age;
    }
    return age <= 2;
  })

  return ageHUman;
  
};

console.log(calcAverageHumanAge(dogAges));