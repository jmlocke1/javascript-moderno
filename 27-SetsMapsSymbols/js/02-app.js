// WeakSet
const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

weakset.add(cliente);
// Los WeakSet solo pueden almacenar objetos. Lo siguiente dará error
// const nombre = 20;
// weakset.add(nombre);

// console.log(weakset.has(cliente));
console.log(weakset.size)
console.log(weakset);