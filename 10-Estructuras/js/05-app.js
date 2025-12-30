// Switch case

const metodoPago = 'tarjeta';

switch (metodoPago) {
    case "efectivo":
        console.log("Pago en efectivo");
        break;
    case "tarjeta":
        console.log("Pago con tarjeta");
        break;
    case 'cheque':
        console.log("Pago con cheque");
        break;
    default:
        console.log("No se reconoce el método de pago");
        break;
}