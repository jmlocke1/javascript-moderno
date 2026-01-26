// Variables

// Filtros, Array con los selectores del DOM
const selectores = ["#marca", "#year", "#minimo", "#maximo", "#puertas", "#transmision", "#color"];
// Desestructuración de arrays para asignar los elementos del DOM a las variables
const elementos = selectores.map((selector) => document.querySelector(selector));
const [marca, year, precioMin, precioMax, puertas, transmision, color] = elementos;

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#buscador').reset();
    mostrarAutos(autos);

    // Llena las opciones de años
    llenarSelect();
});

// event listener para los select de busqueda
elementos.forEach((elemento) => {
    elemento.addEventListener("change", guardarSeleccion);
});

function guardarSeleccion(e) {
    datosBusqueda[e.target.id] = Number.isInteger(parseInt(e.target.value)) ? parseInt(e.target.value) : e.target.value;
    filtrarAuto();
}

function mostrarAutos(autos) {
    limpiarHTML();
    // resultado.innerHTML = '';
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;
        // Insertar en el HTML
        resultado.appendChild( autoHTML );
    });
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect() {
    llenarSelectDOM(marca, 'marca');
    llenarSelectDOM(year, 'year', false);
    llenarPrecio();
    llenarSelectDOM(color, 'color');
}

/**
 * Función que inserta en el DOM las opciones de cada desplegable.
 * 
 * @param {DOMElement} elemento - Elemento del DOM donde se van a insertar las options
 * @param {string} campo        - Campo que se va a buscar en la base de datos
 * @param {boolean} ascendente  - Orden ascendente o descendente
 */
function llenarSelectDOM(elemento, campo, ascendente = true) {
    const campos = differentFields(campo, ascendente);
    campos.forEach( valor => {
        const elementOption = document.createElement('OPTION');
        elementOption.value = valor;
        elementOption.textContent = valor;
        elemento.appendChild(elementOption);
    });
}

function llenarPrecio() {
    const precios = differentFields('precio');
    const min = Math.floor(precios[0] / 10000) * 10000;
    const max = Math.ceil(precios[precios.length - 1] / 10000) * 10000;
    for(let i = min; i <= max; i += 10000){
        const elementOption = document.createElement('OPTION');
        elementOption.value = i;
        elementOption.textContent = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format( i );
        precioMin.appendChild(elementOption.cloneNode(true));
        precioMax.appendChild(elementOption);
    }
}

/**
 * Función que devuelve un array con los valores no repetidos y ordenados de uno de los
 * campos de la base de datos
 * 
 * @param {string} campo        - Campo que contiene el valor que se asignará al array
 * @param {boolean} ascendente  - Orden ascendente o descendente
 * @returns                     - Array con los valores ordenados y no repetidos
 */
function differentFields(campo, ascendente = true) {
    const fields = [];
    autos.forEach(auto => {
        // Si el valor no está repetido, se añade al array
        if(!fields.includes(auto[campo])) fields.push(auto[campo]);
    });
    // Ordenar de mayor a menor
    if(ascendente) {
        if(Number.isInteger(fields[0])) {
            // Los números se ordenan de forma diferente
            fields.sort( (a, b) => a - b );
        } else {
            fields.sort();
        }
    } else {
        if(Number.isInteger(fields[0])) {
            fields.sort( (a, b) => b - a );
        } else {
            fields.sort().reverse();
        }
    }
    return fields;
}

function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filterYear ).filter( filterMin ).filter( filterMax ).filter( filterPuertas ).filter( filterTransmision ).filter( filterColor );
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
    
}

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros términos de búsqueda';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    if( datosBusqueda.marca ) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filterYear(auto) {
    if( datosBusqueda.year ) {
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filterMin(auto) {
    if( datosBusqueda.minimo ) {
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

function filterMax(auto) {
    if( datosBusqueda.maximo ) {
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}

function filterPuertas(auto) {
    if( datosBusqueda.puertas ) {
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filterTransmision(auto) {
    if( datosBusqueda.transmision ) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function filterColor(auto) {
    if( datosBusqueda.color ) {
        return auto.color === datosBusqueda.color;
    }
    return auto;
}