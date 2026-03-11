import { apiKey } from "./config.js";
const criptomonedasSelect = document.querySelector('#criptomonedas');

// Crear un Promise
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
});

function consultarCriptomonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=EUR&api_key=${apiKey}`;
    console.log(url);
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => obtenerCriptomonedas(resultado.Data) )
        .then( criptomonedas => console.log(criptomonedas));
}