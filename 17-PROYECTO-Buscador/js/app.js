// Variables
const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const precioMin = document.querySelector('#minimo');
const precioMax = document.querySelector('#maximo');
const color = document.querySelector('#color');
// Filtros, Array con los selectores del DOM

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    // Llena las opciones de años
    llenarSelect();
});

function guardarSeleccion() {
    
}

function mostrarAutos() {
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;
        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    });
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