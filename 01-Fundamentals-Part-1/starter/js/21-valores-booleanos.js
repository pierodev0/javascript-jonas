const log = (...e) => console.log(...e);
//* Hay 5 valores falsos en Javascript: 0,'',undefined,null,NaN

log(Boolean(0)) //false
log(Boolean('')) //false
log(Boolean(undefined)) //false
log(Boolean(null)) //false

const money = ""; //false
if(money){
    log("Don't spend it all")
} else {
    log("You shoud get a job")
}

let height = 0; //false

if(height){
    log("Year is defined")
} else {
    log("Year is not defined :(")
}

