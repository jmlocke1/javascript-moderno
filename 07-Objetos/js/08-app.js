"use strict";

const producto =  {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// Congelar un objeto
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);
console.log(Object.isFrozen(producto));