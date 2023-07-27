'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const usdToPEN = 3.7;


const movementMap = movements.map(item => `<h1>${item}</h1>`)
console.log(`🚀 ~ movementMap:`, movementMap)
