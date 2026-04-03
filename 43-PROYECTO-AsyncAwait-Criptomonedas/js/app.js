import { apiKey, baseImageUrl } from "./config.js";
const $criptomonedasSelect = document.querySelector('#criptomonedas'),
      $monedaSelect = document.querySelector('#moneda'),
      $formulario = document.querySelector('#formulario'),
      $resultado = document.querySelector('#resultado');
const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

// Crear un Promise
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
    $monedaSelect.value = '';
    $criptomonedasSelect.addEventListener('change', leerValor);
    $monedaSelect.addEventListener('change', leerValor);
    $formulario.addEventListener('submit', submitFormulario);
});

async function consultarCriptomonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=EUR&api_key=${apiKey}`;
    console.log(url);
    // fetch(url)
    //     .then( respuesta => respuesta.json() )
    //     .then( resultado => obtenerCriptomonedas(resultado.Data) )
    //     .then( criptomonedas => selectCriptomonedas(criptomonedas));
    
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        console.log(criptomonedas);
        selectCriptomonedas(criptomonedas);
    } catch (error) {
       console.error(error); 
    }
    

}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach( cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('OPTION');
        option.value = Name;
        option.textContent = FullName;
        $criptomonedasSelect.appendChild(option);
    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
    e.preventDefault();

    // Validar
    const { moneda, criptomoneda } = objBusqueda;
    if(moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }
    // Consular la API con los resultados
    consultarAPI();
}

function mostrarAlerta(mensaje) {
    // Elimina alertas previas con el mismo mensaje
    const alertas = document.querySelectorAll('.alerta');
    alertas?.forEach(alerta => {
        if(alerta.textContent === mensaje) alerta.remove();
    });
    const divMensaje = document.createElement('DIV');
    divMensaje.classList.add('error', 'alerta');
    // Mensaje de error
    divMensaje.textContent = mensaje;
    $formulario.appendChild(divMensaje);
    setTimeout(() => {
        divMensaje.remove();
    }, 3000);
}

async function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${apiKey}`;
    mostrarSpinner();
    console.log(url);
    // fetch(url)
    //     .then( respuesta => respuesta.json() )
    //     .then( cotizacion => {
    //         mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    //     });

    try {
        const respuesta = await fetch(url);
        const cotizacion = await respuesta.json();
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);

    } catch (error) {
        console.error(error);
    }
}

function mostrarCotizacionHTML(cotizacion) {
    limpiarHTML($resultado);
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, CHANGEDAY, LASTUPDATE, IMAGEURL } = cotizacion;
    console.log(cotizacion);
    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `Precio más alto del día <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `Precio más bajo del día <span>${LOWDAY}</span>`;

    const pct24Horas = document.createElement('P');
    pct24Horas.innerHTML = `Porcentaje de cambio las últimas 24 horas <span>${CHANGEPCT24HOUR}%</span>`;

    const cambioDia = document.createElement('P');
    cambioDia.innerHTML = `Variación desde la apertura <span>${CHANGEDAY}</span>`;

    const lastUpdate = document.createElement('P');
    lastUpdate.innerHTML = `Última actualización <span>${LASTUPDATE}</span>`;

    const imagen = document.createElement('P');
    imagen.classList.add('criptoimagen');
    imagen.innerHTML = `<img src="${baseImageUrl}${IMAGEURL}">`;

    $resultado.appendChild(precio);
    $resultado.appendChild(precioAlto);
    $resultado.appendChild(precioBajo);
    $resultado.appendChild(pct24Horas);
    $resultado.appendChild(cambioDia);
    $resultado.appendChild(lastUpdate);
    $resultado.appendChild(imagen);
}

function limpiarHTML(elemento) {
    while(elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML($resultado);

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;
    $resultado.appendChild(spinner);
}