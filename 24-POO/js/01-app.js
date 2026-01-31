// Class Declarations
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;

    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan);
console.log(juan.mostrarInformacion());
console.log(Cliente.bienvenida());

// Class Expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const jose = new Cliente2('Jose', 1200);
console.log(jose);
console.log(jose.mostrarInformacion());