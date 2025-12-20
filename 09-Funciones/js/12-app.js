const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Monitor 28 Pulgadas', precio: 600},
    { nombre: 'Televisor 27 Pulgadas', precio: 200},
    { nombre: 'Ordenador Gaming', precio: 1500},
    { nombre: 'Móvil', precio: 300},
    { nombre: 'Iphone', precio: 1300}
];



const nuevoArray = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);

console.log(nuevoArray);

const nuevoArray2 = carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArray2);