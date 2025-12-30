// Operador Mayor que y Menor que

let dinero = 300;
let totalAPagar = 500;
const tarjeta = false;
const cheque = true;

if( dinero >= totalAPagar) {
    console.log("Sí podemos pagar");
} else if(tarjeta) {
    console.log("Sí puedo pagar porque tengo la tarjeta");
} else if(cheque) {
    console.log("Sí puedo pagar porque tengo un cheque");
} else {
    console.log("No hay dinero suficiente");
}