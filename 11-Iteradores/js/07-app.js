const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Monitor 28 Pulgadas', precio: 600},
    { nombre: 'Televisor 27 Pulgadas', precio: 200},
    { nombre: 'Ordenador Gaming', precio: 1500},
    { nombre: 'Móvil', precio: 300},
    { nombre: 'Iphone', precio: 1300}
];

for( let pendiente of pendientes ) {
    console.log(pendiente);
}

for( let producto of carrito ) {
    console.log(producto.nombre);
}