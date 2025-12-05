"use strict";

const producto =  {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// Sellar un objeto
Object.seal(producto);

producto.disponible = false;
delete producto.precio;
// producto.imagen = 'imagen.jpg';

console.log(producto);
console.log(Object.isSealed(producto));