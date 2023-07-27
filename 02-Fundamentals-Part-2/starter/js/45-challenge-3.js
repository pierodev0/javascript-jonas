"use strict";
const log = (...e) => console.log(...e);
/* 
  ¡Volvamos a Mark y John comparando sus IMC! ¡Esta vez, usemos objetos para implementar los cálculos! Recuerda: IMC = masa / altura ** 2 = masa / (altura * altura) (masa en kg y altura en metros)

    Sus tareas:
    1. Para cada uno de ellos, crea un objeto con propiedades para su nombre completo, masa y altura (Mark Miller y John Smith)
    2. Cree un método 'calcBMI' en cada objeto para calcular el IMC (el mismo método en ambos objetos). Almacene el valor de IMC en una propiedad y también devuélvalo desde el método
    3. Registrar en la consola quién tiene el IMC más alto, junto con el nombre completo y el IMC respectivo. Ejemplo: "¡El IMC de John (28,3) es más alto que el de Mark (23,9)!"
    Datos de la prueba: Mark pesa 78 kg y mide 1,69 m de altura. Juan pesa 92 kg y mide 1,95 m.
    BUENA SUERTE
*/


const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = (this.mass / this.height**2).toFixed(1);
        return this.bmi
    }

}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = (this.mass / this.height**2).toFixed(1);
        return this.bmi

    }
}

log(mark.calcBMI())
log(mark.bmi)

log(john.calcBMI())
log(john.bmi)

if(john.bmi > mark.bmi){
    log(`John's BMI(${john.bmi}) is higher than Mark's (${mark.bmi})`);
} else {
    log(`Mark's BMI(${mark.bmi}) is higher than John's (${john.bmi})`);
}
