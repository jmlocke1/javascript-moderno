

export const nombreCliente = 'Jose';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}
export class Cliente {
    #nombre;
    #ahorro;
    constructor(nombre, ahorro){
        this.#nombre = nombre;
        this.#ahorro = ahorro;
    }

    get nombre() {
        return this.#nombre;
    }

    get ahorro() {
        return this.#ahorro;
    }

    mostrarInformacion() {
         return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
    
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0){
        console.log('Sí tiene saldo');
    } else {
        console.log('El cliente no tiene saldo');
    }
}

export default function nuevaFuncion() {
    console.log('Éste es el Export Default de Cliente.js');
}