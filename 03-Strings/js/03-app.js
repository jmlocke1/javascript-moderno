const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';
// console.log(producto.concat(' : ').concat(precio));
// console.log(producto.concat(' En descuento'));

console.log( producto + " Con un precio de: " + precio );
// Concatenar con comas. Al concatenar con comas introduce un espacio en cada concatenación
console.log( producto, "Con un precio de:", precio );

// Concatenar con template Strings
console.log(`El Producto ${producto} tiene un precio de ${precio}`)