let arr =  ["a","b","c","d","e"];
/*====================================
SLICE ->Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
====================================*/
console.log(arr.slice(2));
// Obtener el ultimo elemento de un array
console.log(arr.slice(-1));
//Crear copia superficial. Util para encadenar varios metodos
console.log(arr.slice());

/*====================================
SPLICE ->  Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
====================================*/

//Eliminar ultimo elemento de un array
arr.splice(-1);

/*====================================
REVERSE -> Invierte los elementos de un array. Muta el array
====================================*/
arr =  ["a","b","c","d","e"]
const arr2 = [7,6,5,4,3,2,1];
console.log(arr2.reverse())

/*====================================
CONCAT -> Se usa para unir dos o más arrays. No muta el array
====================================*/
const arrayConcat = arr.concat(arr2);
console.log(arrayConcat)
console.log([...arr,...arr2]);

/*====================================
JOIN -> Une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
====================================*/
console.log(arrayConcat.join("/"))
