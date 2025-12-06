const producto =  {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
const { nombre } = producto;

console.log(nombre);

// Destructuring con arrays
const numeros = [10,20,30,40,50];

// Extrae el tercer elemento
// const [ , ,tercero] = numeros;

// Esto nos extrae el primer y segundo elementos, y del tercero en adelante los
// asigna a tercero
const [ primero, segundo, ...tercero] = numeros;
console.log(tercero);