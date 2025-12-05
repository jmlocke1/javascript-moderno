const producto =  {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas: {
            peso: '1 kg',
            medida: '1 m.'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

let { nombre, informacion: { fabricacion } } = producto;

console.log(nombre);
console.log(fabricacion);

// Modificando una objeto destructurado
fabricacion.pais = 'España';
nombre = "Iphone 5";
console.log(fabricacion);
console.log(producto);