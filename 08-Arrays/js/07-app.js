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

// Eliminar uno o más elementos entre medias del array
carrito.splice(1, 1);

console.table(carrito);

// carrito.pop();

// // Eliminar último elemento
// console.table(carrito);

// // Eliminar el primer elemento del array
// carrito.shift()