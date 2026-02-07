const sym = Symbol();
const sym2 = Symbol();

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Jose Miguel';
persona[apellido] = 'Izquierdo';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
// Para acceder a un elemento hay que poner los corchetes
console.log(persona[nombre]);

// Las propiedaes que utilizan un Symbol no son iterables
for(let i in persona) {
    console.log(i);
}

// Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);