// for( let i = 0; i < 10; i++ ) {
//     if(i === 5) {
//         console.log("Éste es el cinco");
//         continue;
//     }
//     i % 2 == 0 ? console.log(`Número par: ${i}`) : console.log(`Número impar: ${i}`);
// }


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500, descuento: true},
    { nombre: 'Monitor 28 Pulgadas', precio: 600},
    { nombre: 'Televisor 27 Pulgadas', precio: 200, descuento: true},
    { nombre: 'Ordenador Gaming', precio: 1500},
    { nombre: 'Móvil', precio: 300},
    { nombre: 'Iphone', precio: 1300}
];

for( let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(`${carrito[i].nombre}, precio: ${carrito[i].precio}`);
}