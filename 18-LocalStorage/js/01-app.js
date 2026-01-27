localStorage.setItem('nombre', 'José Miguel');

const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: '300'
};
const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);
// console.log(JSON.parse( localStorage.getItem('producto')));

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify( meses );
localStorage.setItem('meses', mesesString);