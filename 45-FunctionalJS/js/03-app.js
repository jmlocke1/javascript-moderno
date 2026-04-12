const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const resultado = carrito.filter( producto => {
    return producto.precio > 400;
});

console.log(resultado);
console.table(resultado);
// Separar los datos de las funciones
// Esto es un dato
const mayor400 = producto => producto.precio > 400;

// Se puede usar en una función
const resultado2 = carrito.filter(mayor400);
console.table(resultado2);

// Cambiando el dato, se puede utilizar en la misma función
const menor400 = producto => producto.precio < 400;
const resultado3 = carrito.filter(menor400);
console.table(resultado3);