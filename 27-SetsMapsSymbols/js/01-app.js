const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco Nº 1');
carrito.add('Disco Nº 2');
carrito.add('Disco Nº 3');

console.log( carrito.delete('Guitarra') );

// console.log(carrito.has('Guitarra'));
console.log(carrito.size);

carrito.forEach( (producto, index, pertenece) => {
    // console.log(producto);
    // console.log(index);
    // console.log(pertenece);
});
console.log(carrito);

// Del siguiente array, eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20, 40];
const noDuplicados = new Set(numeros);
// numeros.forEach(numero => noDuplicados.add(numero));

console.log(noDuplicados);