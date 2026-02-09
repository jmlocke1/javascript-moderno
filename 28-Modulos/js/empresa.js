import { Cliente } from './cliente.js';

export class Empresa extends Cliente {
    #categoria;
    constructor( nombre, ahorro, categoria ) {
        super(nombre, ahorro);
        this.#categoria = categoria;
    }

    get categoria() {
        return this.#categoria;
    }

    mostrarInformacion() {
         return `${super.mostrarInformacion()} - Categoría: ${this.#categoria}`;
    }
}

export default function nuevaFuncion2() {
    console.log('Éste es el Export Default de Empresa');
}