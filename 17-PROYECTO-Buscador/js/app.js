// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
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
    const years = yearsAutos();
    console.log(yearsAutos());
    years.forEach( y => {
        const yearOption = document.createElement('OPTION');
        yearOption.value = y;
        yearOption.textContent = y;
        year.appendChild(yearOption);
    });
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

function yearsAutos() {
    const years = [];
    autos.forEach(auto => {
        if(!years.includes(auto.year)) years.push(auto.year);
    });
    // Ordenar de mayor a menor
    years.sort( (a, b) => b - a );
    return years;
}