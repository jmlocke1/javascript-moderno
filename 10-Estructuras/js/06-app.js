const usuario = true;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log("Sí puedes comprar");
} else if(!usuario && !puedePagar) {
    console.log("No puedes comprar");
} else if(!usuario) {
    console.log("Inicia sesión o saca una cuenta");
} else if(!puedePagar) {
    console.log("Fondos insuficientes");
} 