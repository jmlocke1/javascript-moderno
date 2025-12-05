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


console.log(producto);
console.log(producto.informacion.medidas);