const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${pendiente} : ${indice}`);
});

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Monitor 28 Pulgadas', precio: 600},
    { nombre: 'Televisor 27 Pulgadas', precio: 200},
    { nombre: 'Ordenador Gaming', precio: 1500},
    { nombre: 'Móvil', precio: 300},
    { nombre: 'Iphone', precio: 1300}
];

const nuevoArray = carrito.forEach( producto => `Producto: ${producto.nombre}, Precio: ${producto.precio}`);

const nuevoArray2 = carrito.map( producto => `Producto: ${producto.nombre}, Precio: ${producto.precio}`);

console.log(nuevoArray);
console.log(nuevoArray2);