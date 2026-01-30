const cliente = {
    nombre: 'Jose',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jose = new Cliente('Jose', 500);
console.log(jose);