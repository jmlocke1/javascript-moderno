const autenticado = true;
const puedePagar = false;

console.log( autenticado ? puedePagar ? "Sí está autenticado y puede pagar" : "Sí está autenticado, pero no puede pagar" : "No está autenticado");


// const efectivo = 800;
// const credito = 400;
// const disponible = efectivo + credito;
// const totalAPagar = 600;

// if( efectivo >= totalAPagar || credito >= totalAPagar || disponible >= totalAPagar ) {
//     if( efectivo > totalAPagar ) {
//         console.log("Pagaste con efectivo");
//     } else {
//         console.log("Otra forma de pago");
//     }
    
// } else {
//     console.log("Fondos insuficientes");
// }