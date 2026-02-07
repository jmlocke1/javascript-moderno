const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'José Miguel');
datos.set('profesion', 'Desarrollador Web');

// Iterador entry
console.log('Iterador entry')
for( let entry of ciudades.entries() ) {
    console.log(entry);
}

for( let entry of ordenes.entries() ) {
    console.log(entry);
}

for( let entry of datos.entries() ) {
    console.log(entry);
}

// Values Iterator
console.log('Values Iterator');
for( let value of ciudades.values() ) {
    console.log(value);
}

for( let value of ordenes.values() ) {
    console.log(value);
}

for( let value of datos.values() ) {
    console.log(value);
}

// Keys Iterator
console.log('Keys Iterator');
for( let key of ciudades.keys() ) {
    console.log(key);
}

for( let key of ordenes.keys() ) {
    console.log(key);
}

for( let key of datos.keys() ) {
    console.log(key);
}

// Default
console.log('Iterador por defecto');
for(let ciudad of ciudades) {
    console.log(ciudad);
}

for(let orden of ordenes) {
    console.log(orden);
}

for(let dato of datos) {
    console.log(dato);
}