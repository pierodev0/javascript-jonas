//

const novela = "Bestia Galopante Del Mar";
const codigo = "A320";

console.log(novela.length)
console.log(novela.indexOf("G"))
console.log(novela.lastIndexOf("G"))

console.log(novela.indexOf("Mar"))

console.log(novela.slice(3, 8))

//Extraer la primera palabra de un string
const primeraPalabra = (string) => string.slice(0, string.indexOf(" "))

console.log(primeraPalabra(novela))

//Extraer la ultima palabra de un string
console.log(novela.lastIndexOf(" "))
const ultimaPalabra = string => string.slice(string.lastIndexOf(" "))
console.log(ultimaPalabra(novela))
//////////////////////////////////

console.log(novela.toLocaleLowerCase())

//Capitalizar Nombre
const capitalizar = string => string[0].toUpperCase() + string.slice(1).toLocaleLowerCase();
console.log(capitalizar("Piero Bayona"))

//Normalizar email
const normalizarEmail = email => email.toLocaleLowerCase().trim();
console.log(normalizarEmail(" piEro@gmail.com  "))

//Reemplazar caracteres
const dolarASoles = string => string.replace("$","S./").replace(",",".");
console.log(dolarASoles("$120,00"))

//Remplazar cadenas
const reemplazarCadenas = (string,pattern,replacement) => string.replace(pattern,replacement);

const stringPrueba = "Me gustan las verduras, las verduras son muy ricas"
console.log(reemplazarCadenas(stringPrueba,"verduras","frutas"))

//Reemplacar todas las coincidencias
const reemplazarTodasCadenas = (string,pattern,replacement) => string.replaceAll(pattern,replacement)
console.log(reemplazarTodasCadenas(stringPrueba,"verduras","frutas"));

console.log(stringPrueba.replace(/verduras/g,"frutas"))

//Booleans
const avion = "Airbus 4562neo"
console.log(avion.includes("neo"))
console.log(avion.includes("full"))
console.log(avion.startsWith("Airbus"))

if(avion.startsWith("Airbus") && avion.endsWith("neo")){
  console.log("Nuevo avion")
}
//////////////////////////////////////////}
//Split
console.log("Piero Bayona Monsalve".split(" "))
console.log(["Piero","Bayona"].join(" "))

const uppername = (string) => {
  const names = string.split(" ");
  let namesUpper = []
  for (const name of names) {
  //  namesUpper.push(name[0].toUpperCase() + name.slice(1))
  namesUpper.push(name.replace(name[0],name[0].toUpperCase()))
  }

  return namesUpper.join(" ")

}
console.log(uppername("piero bayona monsalve"))
//padding
const mensajes = "La casa encantada";
console.log(mensajes.padStart(30,"+"))


const maskNumCard = (string) => {
  const str = string + "";
  // const lasNumbers = str.substring(str.length - 4);
  const lasNumbers = str.slice(-4);
  return lasNumbers.padStart(string.length,"*")
}

console.log(maskNumCard("65465465465465465464"))