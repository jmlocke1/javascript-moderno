const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = true;
    if(descuento) {
        resolve('Descuento Aplicado con éxito');
    } else {
        reject('No se pudo aplicar el descuento');
    }
});

aplicarDescuento
    .then( resultado => descuento(resultado) )
    .catch( reject => console.log( reject) );

// console.log(aplicarDescuento);

// Hay 3 valores posibles...
// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - No se ha cumplido y tampoco fue rechazado

function descuento(mensaje) {
    console.log(mensaje);
}