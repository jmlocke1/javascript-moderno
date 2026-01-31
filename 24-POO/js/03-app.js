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

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return super.mostrarInformacion() + ` Teléfono: ${this.telefono}, Categoría: ${this.categoria}`;
    }

    static bienvenida() {
        return super.bienvenida() + " de empresas";
    }
}


const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Comicpedia', 50000, 976593252, 'Enciclopedia');
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());