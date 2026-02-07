const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);
console.log(cliente.get('nombre'));
cliente.set('saldo', 5000);

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));

// Se puede borrar un elemento
cliente.delete('saldo');
console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));

// Limpiar un Map
cliente.clear();
console.log(cliente);

// Se puede inicializar un Map con unos valores
const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido']]);
paciente.set('dr', 'Dr Asignado');
// Si se sobreescribe una llave, se modifica su valor, pero no se añade una nueva
paciente.set('nombre', 'Antonio');
console.log(paciente);

// Recorrer un Map con un foreach
paciente.forEach( (dato, index) => {
    console.log('Clave:', index, '- Valor:', dato);
});