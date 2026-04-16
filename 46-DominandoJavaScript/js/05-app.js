// Explicit Binding...

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} ${this.apellido} y Escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'José Miguel',
    apellido: 'Izquierdo'
}


const musicaFavorita = ['Heavy Metal', 'Rock'];

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);
// Lo anterior es equivalente a expandir el array con el spread operator
persona.call(informacion, ...musicaFavorita);

persona.apply(informacion, musicaFavorita);

const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();