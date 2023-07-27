"use strict";
const log = (...e) => console.log(...e);

//Clave -> Valor
const piero = {
    firstName: "Piero",
    lastName: "Bayona",
    birthYear: 2000,
    job: "estudent",
    instruments: ["guitarra", "piano", "flauta"],
    hasDriverLicense: true,
   /*  calcAge: function () {
        return this.birthYear > 2022 || this.birthYear < 1900 ? -1 : 2022 - this.birthYear
    } */

    calcAge : function() {
        this.age = 2022 - this.birthYear; //Create a new property
        return this.age;
    },

    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he has ${this.hasDriverLicense ? "a" : "no"} driver'slicense`;
    }

}

log(piero.calcAge())
log(piero.age)

log(piero.getSummary())