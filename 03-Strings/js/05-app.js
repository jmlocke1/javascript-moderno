const producto = 'Monitor 20 Pulgadas';
console.log(producto);

// .replace para reemplazar
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slice para cortar
console.log(producto.slice(0, 10));
// console.log(producto.slice(8));
// console.log(producto.slice(2, 1)); // No hace nada

console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1)); // En este caso, invierte los límites para mostrar algo en pantalla

const usuario = "Jose";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));