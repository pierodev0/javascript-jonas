const log = (...e) => console.log(...e);

// === -> No realiza coercion de tipos
const year = "18"; 
if(year === 18) { //"18" === 18 False
    log("Felicidades! Ya eres mayor de edad")
}

// == -> Realiza coercion de tipos
const favourite = "23";
if (favourite == 23){ //"23" == 23 True
     log( "Excelente numero el 23 :)")
}

