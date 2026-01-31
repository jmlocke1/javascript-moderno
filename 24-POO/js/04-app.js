class Cliente {
    #nombre;
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    getSaldo() {
        return this.saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}

const jose = new Cliente();
jose.setNombre('Jose');
jose.setSaldo(500);
console.log(jose.mostrarInformacion());
console.log(jose.getNombre());
console.log(jose.getSaldo());
