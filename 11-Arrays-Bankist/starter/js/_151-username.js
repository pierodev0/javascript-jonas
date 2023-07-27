'use strict';
/**
 * Create an string of the 
 * @param {array} accs
 */
const createUsernames = function (accs) {
  //Iterar el array
  accs.forEach(function (acc) {
    //Agregar la propiedad accs del array que se pasa como parametro
    acc.username = acc.owner
      .toLowerCase() //Convertir a minuscula
      .split(' ') //Dividir el array en subcandenas usando el espacio como separador
      .map(name => name[0]) //Obtener el primer caracter
      .join(''); //Unir en una cadena
  });
};
createUsernames(accounts);
console.log(`🚀 ~ accounts:`, accounts)


