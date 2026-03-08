const $resultado = document.querySelector('#resultado');
const $formulario = document.querySelector('#formulario');
const $terminoBusqueda = document.querySelector('#termino');
import { apiKey, urlApi } from "./config.js";

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();
    $terminoBusqueda.value = $terminoBusqueda.value.trim();
    const terminoBusqueda = $terminoBusqueda.value;

    if(terminoBusqueda === '') {
        mostrarAlerta('Agrega un término de búsqueda');
        return;
    }

    buscarImagenes(terminoBusqueda);
}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector('.bg-red-100');
    
    if(existeAlerta) return;
    const alerta = document.createElement('P');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    alerta.innerHTML = `
        <strong class="font-bold">¡Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
    `;
    $formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function buscarImagenes(termino) {
    const url = `${urlApi}?key=${apiKey}&q=${termino}`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarImagenes(resultado.hits);
        });
}

function mostrarImagenes(imagenes) {
    limpiarHTML($resultado);

    // Iterar sobre el array de imágenes y construir el HTML
    imagenes.forEach(imagen => {
        const { previewURL, webformatURL, likes, views, largeImageURL, pageURL } = imagen;
        const titulo = titlePhoto(imagen);
        $resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${webformatURL}" >
                    <div class="p-4">
                        <p class="font-bold">${titulo}</p>
                        <p class="font-bold">${likes} <span class="font-light"> Me gusta</span> </p>
                        <p class="font-bold">${views} <span class="font-light"> Veces vista</span> </p>
                        <a
                            class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}" target="_blank" rel="noopener noreferrer" 
                            title="Ver imagen: ${titulo}. Se abre en una nueva pestaña"
                        >
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}

function titlePhoto(imagen) {
    const { pageURL, id } = imagen;
    const photoElements = pageURL.split('/');
    let titulo = photoElements.filter(titulo => titulo.includes(id))[0];
    // Quitamos el id del título
    titulo = titulo.replace(id, '');
    // Sustituimos los guiones altos o bajos por espacios
    titulo = titulo.replaceAll('-', ' ').trim();
    titulo = titulo.replaceAll('_', ' ').trim();
    // Primer carácter en mayúscula
    titulo = titulo[0].toUpperCase() + titulo.substring(1)
    return titulo;
}

function limpiarHTML(elemento) {
    while(elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}