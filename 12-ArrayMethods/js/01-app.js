const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un array

// meses.forEach( (mes) => {
//     if(mes === 'Enero') {
//         console.log('Enero sí existe');
//     }
// });

// // Array de strings
// const resultado = meses.includes('Enero');

// console.log(resultado);

// En un array de objetos se utiliza .some
const resultado2 = carrito.some( producto => producto.nombre === 'Monitor 27 Pulgadas');

console.log(resultado2);

// En un array tradicional con some
const existe = meses.some( mes => mes === 'Febrero');
console.log(existe);