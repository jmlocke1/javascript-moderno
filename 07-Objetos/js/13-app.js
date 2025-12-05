const producto =  {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    },
    fabricacion: {
        pais: "España",
        localidad: {
            localidad: "Alicante",
            municipio: "Alicante",
            estado: {
                verificado: false,
                metodo: Symbol(),
                titulo: undefined
            }
        }
    }
};

console.log(Object.keys( producto ));

console.log(Object.values(producto));

console.log(Object.entries(producto));
const propiedades = Object.entries(producto);


function cloneObject(objeto){
    const resultado = { ...objeto };
    const propiedades = Object.entries(resultado);
    propiedades.forEach((propiedad) => {
        const type = Object.prototype.toString.call(propiedad[1]);
        if (type === '[object Object]') {
            resultado[propiedad[0]] = cloneObject(propiedad[1]);
        }
    });
    return resultado;
}

const copia = cloneObject(producto);