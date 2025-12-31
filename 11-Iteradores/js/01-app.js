// for( let i = 0; i < 100; i++ ) {
//     i % 2 == 0 ? console.log(`Número par: ${i}`) : console.log(`Número impar: ${i}`);
// }

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Monitor 28 Pulgadas', precio: 600},
    { nombre: 'Televisor 27 Pulgadas', precio: 200},
    { nombre: 'Ordenador Gaming', precio: 1500},
    { nombre: 'Móvil', precio: 300},
    { nombre: 'Iphone', precio: 1300}
];

for( let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre}, precio: ${carrito[i].precio}`);
}