const $container = document.querySelector('.container');
const $resultado = document.querySelector('#resultado');
const $formulario = document.querySelector('#formulario');
const $ciudad = document.querySelector('#ciudad');
const $pais = document.querySelector('#pais');
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
    console.log(apiId);

}