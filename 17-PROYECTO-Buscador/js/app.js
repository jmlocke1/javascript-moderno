// Variables
const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const precioMin = document.querySelector('#minimo');
const precioMax = document.querySelector('#maximo');
const color = document.querySelector('#color');
// const { min, max } = minMaxYear();

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();

    // Llena las opciones de años
    llenarSelect();
});

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
}

function llenarSelectDOM(elemento, campo, ascendente = true) {
    const campos = differentFields(campo, ascendente);
    console.log(campos);
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
    console.log(min, max);
}

// /**
//  * 
//  * @returns {min, max} Año mínimo y máximo de todos los coches que están en la base de datos
//  */
// function minMaxYear() {
//     let min, max;
//     min = max = autos[0].year;
//     autos.forEach( auto => {
//         auto.year > max ? max = auto.year : '';
//         auto.year < min ? min = auto.year : '';
//     });
    
//     return {min, max};
// }

// function yearsAutos() {
//     const years = [];
//     autos.forEach(auto => {
//         if(!years.includes(auto.year)) years.push(auto.year);
//     });
//     // Ordenar de mayor a menor
//     years.sort( (a, b) => b - a );
//     return years;
// }

function differentFields(campo, ascendente = true) {
    const fields = [];
    autos.forEach(auto => {
        if(!fields.includes(auto[campo])) fields.push(auto[campo]);
    });
    // Ordenar de mayor a menor
    if(ascendente) {
        if(Number.isInteger(fields[0])) {
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