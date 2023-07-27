// Remember, we're gonna use strict mode in all scripts now!
"use strict";
function log(text) {
	const body = document.querySelector('body');
	const padre = document.createElement('div');
	padre.style.cssText ='font-family: Helvetica, sans-serif; padding: 5px 20px; position: absolute; width: 80%; max-width: 800px; bottom: 0; right: 20px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; color: rgb(0, 0, 0); font-size: 11px; border-radius: 10px 10px 0 0; background-color: white;';
	const p = document.createElement('p');  
	typeof text === 'string' ? (p.style.color = 'green') : '';
	typeof text === 'number' ? (p.style.color = 'blue') : '';
	typeof text === 'undefined' ? p.textContent = "undefined" : '';
  
	p.innerHTML = `<pre>${text}</pre>`;
	padre.append(p);
	body.append(padre);
	
	console.log(text);
  }
/* 
Trabajamos para una empresa que construye un termómetro doméstico inteligente. Nuestra tarea más reciente es esta: "Dada una serie de temperaturas de un día, calcule la amplitud de temperatura. Tenga en cuenta que en algún momento podría haber un error del sensor".
*/
const temperatures = [3, -2, -6 ,1, "error",9,14,17,15,14,9,5];

// !1) Entender el problema
// Cual es la amplitud de la temperatura? Respuesta: Es la diferencia entre la temperatura mas alta y la mas baja
// Como calcultar la temperatura max y min temperatura?
//Que es un error de sensor y que hacer cuando suceda?
// !2) Romper en pequeños sub-problemas
// Como ignorar los errores?
// Encuentra la temperatura max en un array
// Encuentra la temperatura min en un array
// Restar el minimo del maximo (amplitud) y retornar el valor

const calcTempAmplitude = function(temps){
	let max = temps[0];
	let min = temps[0];

	
	for(let i = 0; i < temps.length;i++){
		if(typeof temps[i] !== "number") {
			continue
		}
		if(temps[i] > max){
			max = temps[i]
		}
		if(temps[i] < min){
			min = temps[i]
		}
	}
	return max - min;
}
// console.log(calcTempAmplitude(temperatures));

//PROBLEM 2
// Funcion debe tomar 2 array de temp
// !1) Entender el problema
// Con 2 arrays se debe implementar el array 2 veces Rpta: No. Solo unir los 2 arrays
// !2) Romper en pequeños sub-problemas
// Unir 2 arrays

const calcTempAmplitudeNew = function(t1,t2){
	// Unir arrays
	const temps = t1.concat(t2)
	
	let max = temps[0];
	let min = temps[0];

	
	for(let i = 0; i < temps.length;i++){
		if(typeof temps[i] !== "number") {
			continue
		}
		if(temps[i] > max){
			max = temps[i]
		}
		if(temps[i] < min){
			min = temps[i]
		}
	}
	return max - min;
}
