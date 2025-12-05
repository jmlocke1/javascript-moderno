const producto =  {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    fabricacion: {
        pais: 'España'
    }
}

const medidas = {
    peso: '1 kg',
    medida: '1 m'
}

// console.log(producto);
// console.log(medidas);

// const resultado = {};
// Object.assign(resultado, producto, medidas);

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas,  fabricacion: {...producto.fabricacion}};
// Probando a alterar un objeto interno
resultado2.fabricacion.pais = "Francia";

console.log(producto);
console.log(resultado2);
// console.log(resultado2);