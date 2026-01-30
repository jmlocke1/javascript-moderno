function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.printType = function() {
    console.log(typeof this);
}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}


function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype );

Persona.prototype.constructor = Cliente;

// Sobreescritura de una función y llamada al método padre
Persona.prototype.nombreClienteSaldo = function() {
    return `${Cliente.prototype.nombreClienteSaldo.call(this)}, Teléfono: ${this.telefono}`;
}

Persona.prototype.mostrarTelefono = function() {
    return `El teléfono de esta persona es ${this.telefono}`;
}

// Instanciarlo
const jose = new Persona('José Miguel', 5000, 666666666);
console.log(jose);
console.log(jose.nombreClienteSaldo());
console.log(jose.mostrarTelefono());


console.log(jose.printType());