self.onload = () => {
    console.log('Ventana Lista');
}

window.nombreGlobal = 'Monitor de 50 pulgadas global';
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}, pero no el global ${self.nombreGlobal}`
    }
}

console.log(producto.mostrarInfo());