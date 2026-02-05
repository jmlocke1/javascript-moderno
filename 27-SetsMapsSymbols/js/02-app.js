// WeakSet
const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

weakset.add(cliente);
const nombre = 20;
weakset.add(nombre);

console.log(weakset);