"use strict";
const log = (...e) => console.log(...e);

const characters = ["Ai","Ginko","Yaichi","Keika","Machi",];
log(characters);

//ADD ELEMENTS
characters.push("Shogi") // Add element to the end of array
log(characters);
characters.unshift("Meijin"); //Add element at the start
log(characters);


//REMOVE ELEMENTS
characters.pop(); //Remove the last element
const poped = characters.pop(); 
log(poped);
log(characters);

characters.shift() //Remove the first element
characters.shift()
log(characters)

log(characters.indexOf("Yaichi"));

if(characters.includes("Ginko")){
    log("The characters Ginko exist");
}


