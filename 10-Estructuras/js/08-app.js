const autenticado = "false";

if(autenticado) {
    console.log("El usuario está autenticado");
} else {
    console.log("El usuario no está autenticado");
}

const puntaje = 500;
function revisarPuntaje() {
    if( puntaje > 400 ) {
        console.log("¡¡¡Excelente!!!");
        return;
    }

    if(puntaje > 300) {
        console.log("Buena puntuación... Felicidades");
        return;
    }
}

revisarPuntaje();