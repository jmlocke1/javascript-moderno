const $container = document.querySelector('.container');
const $resultado = document.querySelector('#resultado');
const $formulario = document.querySelector('#formulario');
const $ciudad = document.querySelector('#ciudad');
const $pais = document.querySelector('#pais');
const retardoSpinner = 1000; // Retardo en el spinner, en milisegundos

import { apiId } from "./config.js";

window.addEventListener('load', () => {
    $formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    // Validar
    const ciudad = $ciudad.value.trim();
    const pais = $pais.value;
    
    if(ciudad === '' || pais === ''){
        mostrarError('Ambos campos son obligatorios');
    }

    // Consultar la API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    const alertasAnteriores = document.querySelectorAll('.alerta');
    alertasAnteriores.forEach(alerta => {
        if(alerta.querySelector('span').textContent === mensaje) alerta.remove();
    });

    // const textoAlertaAnterior = alertaAnterior.querySelector('span');


    // Crear una alerta
    const alerta = document.createElement('DIV');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-2-md', 'mx-auto', 'mt-6', 'text-center', 'alerta');
    alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>
    `;

    $container.appendChild(alerta);

    // Eliminar la alerta después de cinco segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

function consultarAPI(ciudad, pais) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&lang=es&appid=${apiId}`;
    // Tomamos la fecha actual en milisegundos
    const tiempoInicial = Date.now();
    spinner();
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( datos => {
            if(datos.cod === '404') {
                mostrarError(`La Ciudad ${ciudad} no se ha encontrado`);
                return;
            }

            // Imprime la respuesta en el HTML
            setTimeout(() => {
                mostrarClima(datos);
            }, retardo(tiempoInicial));
            
        });
}

function mostrarClima(datos) {
    limpiarHTML();
    console.log(datos);
    const { name, main: { temp, temp_max, temp_min }, weather: [{ description }] } = datos;
    const tiempoDesc = description[0].toUpperCase() + description.substring(1);
    const temperatura = document.createElement('P');
    temperatura.innerHTML = `${kelvinToCelsius(temp)} &#8451;`;
    temperatura.classList.add('font-bold', 'text-6xl');

    const nombreCiudad = document.createElement('P');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const tempMaxima = document.createElement('P');
    tempMaxima.innerHTML = `Máx: ${kelvinToCelsius(temp_max)} &#8451;`;
    tempMaxima.classList.add('text-2xl');

    const tempMinima = document.createElement('P');
    tempMinima.innerHTML = `Mín: ${kelvinToCelsius(temp_min)} &#8451;`;
    tempMinima.classList.add('text-2xl');


    const tiempo = document.createElement('P');
    tiempo.classList.add('text-5xl');
    tiempo.textContent = tiempoDesc;

    const resultadoDiv = document.createElement('DIV');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(temperatura);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);
    resultadoDiv.appendChild(tiempo);
    $resultado.appendChild(resultadoDiv);

    console.log('Kelvin', temp, 'Celsius', kelvinToCelsius(temp), 'Farenheit', kelvinToFarenheit(temp));
}

function kelvinToCelsius(temp) {
    return parseFloat(temp - 273.15).toFixed(2);
}

function kelvinToFarenheit(temp) {
    return parseFloat( (temp - 273.15) * 1.8 + 32).toFixed(2);
}

function limpiarHTML() {
    while($resultado.firstChild) {
        $resultado.removeChild($resultado.firstChild);
    }
}

function spinner() {
    limpiarHTML();
    const divSpinner = document.createElement('div')
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;
    $resultado.appendChild(divSpinner);
}

function retardo(tiempoInicial) {
    const ahora = Date.now();
    console.log(tiempoInicial, ahora, ahora - tiempoInicial);
    const diferencia = retardoSpinner - (ahora - tiempoInicial);
    const retardo = diferencia < 0 ? 0 : diferencia;
    console.log('Retardo:', retardo);
    return retardo;
}