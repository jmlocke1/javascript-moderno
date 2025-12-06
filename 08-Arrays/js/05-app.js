const carrito = [];

const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: "Celular",
    precio: 800
}

// Agrega al final de un array
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

// Agrega al inicio de un array
carrito.unshift(producto3);


console.table(carrito);