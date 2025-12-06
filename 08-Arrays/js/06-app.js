const carrito = [];

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// Forma declarativa de añadir elementos
let resultado;
resultado = [ ...carrito, producto];


console.table(carrito);
console.table(resultado);