"use strict";
const log = (...e) => console.log(...e);

const describeCountry = (country,population,capitalCity) => {

 return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
const peruInformation = describeCountry("Peru",7,"Lima")


log(peruInformation)

function percentageOfWorld1(population){

    const percentageOfWorld = (population * 100) / 7900;
    if(percentageOfWorld < 100) {
        return percentageOfWorld.toFixed(1);
    } else {
        return -1;
    }
}

const percentagePeru = percentageOfWorld1(33);
log(percentagePeru);

const percentageOfWorld2 = function(population){

    const percentageOfWorld = (population * 100) / 7900;
    if(percentageOfWorld < 100) {
        return percentageOfWorld.toFixed(1);
    } else {
        return -1;
    }
}

const percentageColombia = percentageOfWorld2(51.27)
log(percentageColombia)

const percentageOfWorld3 = (population) => {
    const percentageOfWorld = (population * 100) / 7900;
    if(percentageOfWorld < 100) {
        return percentageOfWorld.toFixed(1);
    } else {
        return -1;
    }
}

const populationIndia = percentageOfWorld3(1390);
log(populationIndia);


const describePopulation = (country,population ) => {
    const percentageCountry = percentageOfWorld1(population);

    return `${country} has 1441 million people which is about ${percentageCountry}% of the world`


}

log(describePopulation("China",1412))