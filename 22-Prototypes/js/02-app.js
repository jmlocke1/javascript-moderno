function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jose = new Cliente('Jose', 500);


function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`;
}
console.log(formatearCliente(jose));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Código con Juan', 4000, 'Cursos en línea');
console.log(formatearEmpresa(CCJ))