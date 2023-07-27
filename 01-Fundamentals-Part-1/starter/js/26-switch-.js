const log = (...e) => console.log(...e);

const day = "domingo";

switch(day){ //Hace comparacion estricta
    case "lunes": // day === "Lunes"
        log("Estudiar programacion");
        break;
    case "martes":
        log("Estudiar en SENATI");
        break;
    case "miercoles":
    case "jueves":
        log("Estudiar matematicas 😫");
        break;
    case "viernes":
        log("Jugar Left 4 Dead");
        break;
    case "sabado":
        log("Ir a la playa");
        break;
    case "domingo":
        log("Dormir todo el dia");
        break;
    default:
        log("Dia invalido");
        
}

if(day === "lunes"){
    log("Estudiar programacion");
} else if (day === "martes"){
    log("Estudiar en SENATI");
} else if( day === "miercoles" || day === "jueves"){
    log("Estudiar matematicas 😫");
}  else if( day === "viernes"){
    log("Jugar Left 4 Dead");
} else if (day === "sabado"){
    log("Ir a la playa");
} else if ( day === "domingo"){
    log("Dormir todo el dia")
} else {
    log("Dia invalido")
}