const obtenerCliente = () => {
    const nombre = 'José Miguel';

    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
};

const cliente = obtenerCliente();
cliente();

class Cliente {
    #nombre;
    constructor(nombre){
        this.#nombre = nombre;
    }

    escribeNombre() {
        return () => console.log(this.#nombre);
    }
}

const cliente2 = new Cliente('José Miguel');
const nombre = cliente2.escribeNombre();
nombre();

// Ejemplo de closure encontrado en la página Aprende JavaScript
function crearSaludador(saludo) {
    return function (nombre) {
        return saludo + ', ' + nombre + '!'
    }
}

const saludarEnEspanol = crearSaludador('Hola');
const saludarEnIngles = crearSaludador('Hello');
const saludarEnFrances = crearSaludador('Bonjour');

console.log(saludarEnEspanol('Ana'));    // "Hola, Ana!"
console.log(saludarEnIngles('John'));    // "Hello, John!"
console.log(saludarEnFrances('Marie'));  // "Bonjour, Marie!"

// El mismo ejemplo con clases
class Saludador {
    #saludo;

    constructor(saludo) {
        this.#saludo = saludo;
    }

    saludo(nombre) {
        return `${this.#saludo}, ${nombre}`
    }
}

const saludoEnEspanol = new Saludador('Hola');
const saludoEnIngles = new Saludador('Hello');
const saludoEnFrances = new Saludador('Bonjour');

console.log(saludoEnEspanol.saludo('Ana'));    // "Hola, Ana!"
console.log(saludoEnIngles.saludo('John'));    // "Hello, John!"
console.log(saludoEnFrances.saludo('Marie'));  // "Bonjour, Marie!"
